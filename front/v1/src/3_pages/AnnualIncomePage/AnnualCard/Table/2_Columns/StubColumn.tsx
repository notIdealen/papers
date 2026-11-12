import style from './StubColumn.module.css';
import DeadCell from '../3_Cells/DeadCell';

export default function StubColumn() {

    const months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const HEADER_CELL = <DeadCell className='headercell'>Month</DeadCell>;
    const BODY_CELLS = months.map(month => {
        return <DeadCell key={month} className='bodycell'>{month}</DeadCell>;
    });
    const FOOTER_CELL = <DeadCell className='resultcell'>Total(Result):</DeadCell>;

    return <div className={style.stubcolumn}>
        {HEADER_CELL}
        {BODY_CELLS}
        {FOOTER_CELL}
    </div>;
}
