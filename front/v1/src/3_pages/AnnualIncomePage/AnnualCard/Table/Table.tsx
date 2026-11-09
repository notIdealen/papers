import style from './Table.module.css';
import StubColumn from './Sections/StubSection/StubColumn';
import TableSection from './Sections/TableSection/TableSection';
import TotalColumn from './Sections/TotalSection/TotalColumn';

// type TableProps = {
//     table: TableDTO,
// }

export default function Table() {
    // useSelector<RootState, NSection[]>(state => state.)
    return <div className={style.table}>
        <StubColumn/>
        <div  /* В этот див разрешается сброс */>
            <TableSection/>
        </div>
        <TotalColumn/>
    </div>;
}
