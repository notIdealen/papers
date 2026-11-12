import style from './Column.module.css';
import type { RootState } from '../../../../../7_redux/store';
import { useSelector } from 'react-redux';
import { useTableIDCtx } from '../../Context/tableid.context';
import DeadCell from '../3_Cells/DeadCell';

export default function TotalColumn() {
    const tableID = useTableIDCtx();
    const tableResult = useSelector((state: RootState) => state.TABLE.tableResult[tableID]);

    const HEADER_CELL = <DeadCell className='headercell'>TOTAL</DeadCell>;
    
        let counter = 0;
        const CELLS = tableResult.map(value => {
            counter++;
            return <DeadCell key={tableID+counter} className='bodycell'>{value}</DeadCell>;
        });

    return <div className={style.column}>
        <div>
            <button>ADD SEC</button>
        </div>
        {HEADER_CELL}
        {CELLS}
    </div>;
};
