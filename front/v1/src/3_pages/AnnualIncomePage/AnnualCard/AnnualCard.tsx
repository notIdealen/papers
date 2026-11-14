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
        <div className={style['card-header']}>
            <button className={style.button}>m</button>
            <h1 className={style.title}>{table.name}</h1>
            <button className={style.button}>x</button>
            <button className={style.button}>s</button>
        </div>
        <TableIDCtx.Provider value={props.tableID}>
            <Table/>
        </TableIDCtx.Provider>
    </div>;
}
