import style from './Column.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';
import LiveCell from '../3_Cells/LiveCell';
import LiveHeaderCell from '../3_Cells/LiveHeaderCell';
import DeadResultCell from '../3_Cells/DeadResultCell';
// import { tableActions } from '../../../../../7_redux/annual_table.slice';
import { useState } from 'react';
// import { useState } from 'react';

type ColumnProps = {
    columnID: string,
}

export default function WorkColumn(props: ColumnProps) {
    const column = useSelector((state: RootState) => state.TABLE.columns[props.columnID]);
    const cellsOrder = useSelector((state: RootState) => state.TABLE.cellIDsOrder[props.columnID]);

    const [isOpenForm, setIsOpenForm] = useState(false);

    // const dispatch = useDispatch<AppDispatch>();

    const HEADER_CELL = <LiveHeaderCell className='headercell' /*cellID={props.columnID+'header'}*/>{column.name}</LiveHeaderCell>;

    const CELLS = cellsOrder.map(cellID => {
        return <LiveCell key={cellID} className='bodycell' cellID={cellID}/>;
    });

    const FOOTER_CELL = <DeadResultCell className='resultcell' columnID={props.columnID}></DeadResultCell>;

    const FORM = <div className={style['create-column-form']}>
        <label>Column name:
            <input type="text" 
                className={style['create-column-form_input']}
                placeholder="Enter name"/>
        </label>
        <br /><br /><br />
        <p>Choose type:</p>
        <label className={style.label}>
            <input 
                type="radio" 
                name="level" 
                value="vsum" 
                // checked={columnType === 'vsum'}
                // onChange={(e) => setColumnType(e.target.value)}
            />
            Sum all cells
        </label>
        <label className={style.label}>
            <input 
                type="radio" 
                name="level" 
                value="lastvalue" 
                // checked={columnType === 'lastvalue'}
                // onChange={(e) => setColumnType(e.target.value)}
            />
            Last value
        </label>
        <button
            onClick={()=>{setIsOpenForm(false);}}
        >CLOSE</button>
    </div>;

    return <>
        <div className={style.column}>
            <div className={style['header-container']}>
                <div className={style['button-container']}>
                    <button className={style['button']}>x</button>
                    <button className={style['button']}
                        onClick={()=>{setIsOpenForm(!isOpenForm);}}
                    >+</button>
                </div>
                {HEADER_CELL}
            </div>
            {CELLS}
            {FOOTER_CELL}
        </div>
        {isOpenForm && FORM}
    </>;
};
