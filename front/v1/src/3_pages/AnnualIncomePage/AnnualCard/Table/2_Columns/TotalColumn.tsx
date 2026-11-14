import style from './Column.module.css';
import type { RootState } from '../../../../../7_redux/store';
import { useSelector } from 'react-redux';
import { useTableIDCtx } from '../../Context/tableid.context';
import DeadCell from '../3_Cells/DeadCell';
import type { ReactElement } from 'react';

export default function TotalColumn() {
    const tableID = useTableIDCtx();
    const tableResult = useSelector((state: RootState) => state.TABLE.tableResult[tableID]);

    const HEADER_CELL = <DeadCell className='headercell'>TOTAL</DeadCell>;
    
        const CELLS: ReactElement[] = [];
        for (let i = 0; i < tableResult.length; i++) {
            if (i === tableResult.length - 1) {
                CELLS.push(<DeadCell key={tableID+i} className='resultcell'>{tableResult[i]}</DeadCell>);
                continue;
            }
            CELLS.push(<DeadCell key={tableID+i} className='bodycell'>{tableResult[i]}</DeadCell>);
        }

    return <div className={style.column}>
        <div className={style['header-container']}>
        {HEADER_CELL}
        </div>
        {CELLS}
    </div>;
};
