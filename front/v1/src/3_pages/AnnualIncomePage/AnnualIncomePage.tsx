import Header from '../../4_layouts/Header/Header';
// import Column from './AnnualCard/Table/Sections/TableSection/Columns/Column';
import AnnualCard from './AnnualCard/AnnualCard';
import type { RootState } from '../../7_redux/store';
import { useSelector } from 'react-redux';
import type { NTable } from './AnnualCard/Table/entities/annual_table.entities';

export default function AnnualIncomePage() {
    // const tablesOrder = useSelector((state: RootState => state.TABLE.
    const tables = useSelector<RootState>(state => state.TABLE.tables) as NTable[];
    const CARDS = tables.map(table => {
        return <AnnualCard key={table.id} tableID={table.id} tableName={table.name}/>;
    });

    return (
        <div>
            <Header/>
            <button>CREATE CARD</button>
            {CARDS}
        </div>
    );
}
