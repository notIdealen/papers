import Header from '../../4_layouts/Header/Header';
import AnnualCard from '../../5_components/AnnualCard/AnnualCard';
import type {Table as TableDTO} from '../../2_entities/Table';
import type { RootState } from '../../7_redux/store';
import { useSelector } from 'react-redux';
// import type { ReactElement } from 'react';

export default function AnnualIncomePage() {
    // const data = localStorage.getItem('annualTable');
    // let tables: ReactElement[];
    // if (!data) {
    //     const table: Table = {
    //         id: 'emptyData',
    //         year: new Date().getFullYear().toString(),
    //         columns: [],
    //     };
    //     tables = [<AnnualCard key={table.id} table={table}/>];
    // } else {
    //     tables = JSON.parse(data!).
    //         sort((a: Table, b:Table) => Number(b.year) - Number(a.year)).
    //         map((table: Table) => <AnnualCard key={table.id} table={table}/>);
    // }

    const data = useSelector<RootState>(state => state.TABLE) as TableDTO[];
    const unsortedTables = [...data];
    const TABLES = unsortedTables.
        sort((a: TableDTO, b:TableDTO) => Number(b.year) - Number(a.year)).
        map((table: TableDTO) => <AnnualCard key={table.id} table={table}/>);

    return (
        <div>
            <Header/>
            <button>ADD</button>
            {TABLES}
        </div>
    );
}
