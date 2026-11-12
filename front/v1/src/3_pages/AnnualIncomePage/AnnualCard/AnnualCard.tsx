import style from './AnnualCard.module.css';
import Table from './Table/Table';
import { TableIDCtx } from './Context/tableid.context';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../7_redux/store';

type AnnualCardProps = {
    tableID: string,
}

export default function AnnualCard(props: AnnualCardProps) {
    const table = useSelector((state: RootState) => state.TABLE.tables[props.tableID]);
    return <div className={style.card}>
        <h1>{table.name}</h1>
        <button>DEL-CARD</button>
        <button>SAVE AS TEMPLATE</button>
        <TableIDCtx.Provider value={props.tableID}>
            <Table/>
        </TableIDCtx.Provider>
    </div>;
}
