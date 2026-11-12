import style from './Column.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';
import LiveCell from '../3_Cells/LiveCell';
import LiveHeaderCell from '../3_Cells/LiveHeaderCell';
import DeadResultCell from '../3_Cells/DeadResultCell';

type ColumnProps = {
    columnID: string,
}

export default function WorkColumn(props: ColumnProps) {
    const column = useSelector((state: RootState) => state.TABLE.columns[props.columnID]);//?
    const cellsOrder = useSelector((state: RootState) => state.TABLE.cellIDsOrder[props.columnID]);

    const HEADER_CELL = <LiveHeaderCell className='headercell' cellID={props.columnID+'header'}>{column.name}</LiveHeaderCell>;

    const CELLS = cellsOrder.map(cellID => {
        return <LiveCell key={cellID} className='bodycell' cellID={cellID}/>;
    });

    const FOOTER_CELL = <DeadResultCell className='resultcell' columnID={props.columnID}></DeadResultCell>;

    return <div className={style.column}>
        <div>
            <button>B1</button>
            <button>B2</button>
        </div>
        {HEADER_CELL}
        {CELLS}
        {FOOTER_CELL}
    </div>;
};
