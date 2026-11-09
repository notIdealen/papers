import style from './TableBlock.module.css';
import SumColumn from './Columns/SumColumn';

// type TableSectionProps = {
//     tableSection: TableSectionDTO,
// }

export default function TableSection() {

    return <div className={style.section}>
        <h1>NAME</h1>
        <button>DELETE</button>
        <button>ADD-SECTION</button>
        <div>
            COLUMNS
            <SumColumn/>
        </div>
    </div>;
}
