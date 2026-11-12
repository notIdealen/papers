import Header from '../../4_layouts/Header/Header';
import AnnualCard from './AnnualCard/AnnualCard';
import type { RootState } from '../../7_redux/store';
import { useSelector } from 'react-redux';

export default function AnnualIncomePage() {
    const tablesOrder = useSelector<RootState>(state => state.TABLE.tablesOrder) as string[];

    const CARDS = tablesOrder.map(tableID => {
        return <AnnualCard key={tableID} tableID={tableID}/>;
    });

    return (
        <div>
            <Header/>
            <button>CREATE CARD</button>
            {CARDS}
        </div>
    );
}
