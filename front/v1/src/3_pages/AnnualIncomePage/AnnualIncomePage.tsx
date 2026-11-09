import Header from '../../4_layouts/Header/Header';
// import AnnualCard from './AnnualCard/AnnualCard';
// import type { RootState } from '../../7_redux/store';
// import { useSelector } from 'react-redux';

export default function AnnualIncomePage() {
    // const data = useSelector<RootState>(state => state.TABLE) as TableDTO[];
    // const unsortedTables = [...data];
    // const CARDS = unsortedTables.
    //     sort((a: TableDTO, b:TableDTO) => Number(b.year) - Number(a.year)).
    //     map((table: TableDTO) => <AnnualCard key={table.id} table={table}/>);

    return (
        <div>
            <Header/>
            <button>CREATE TABLE</button>
            CARDS
            {/* {CARDS} */}
        </div>
    );
}
