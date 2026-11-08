import style from './TableBlock.module.css';
import type { TableSection as TableSectionDTO} from '../entities/tableEntities';
import Column from './Columns/Column';
import SumColumn from './Columns/SumColumn';

// type TableSectionProps = {
//     tableSection: TableSectionDTO,
// }
// приримает и организует столбцы
export default function TableSection() {
    //useSelector
    const tableSection: TableSectionDTO = {id: 'qwerty', columns: []};
    const COLUMNS = tableSection.columns.map(column => {
        return <Column key={column.id}/>;
    });

    return <div className={style.tableblock}>
        {COLUMNS}
        <SumColumn/>
    </div>;
}
