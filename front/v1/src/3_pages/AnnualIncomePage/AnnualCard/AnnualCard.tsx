// import { type ReactNode } from 'react';
import style from './AnnualCard.module.css';
import Table from './Table/Table';
import { TableIDCtx } from './Context/tableid.context';

type AnnualCardProps = {
    tableID: string,
    tableName: string,
}

export default function AnnualCard(props: AnnualCardProps) {
    //получить 
    return <div className={style.card}>
        <h1>{props.tableName}</h1>
        <button>DEL-CARD</button>
        <button>SAVE AS TEMPLATE</button>
        <TableIDCtx.Provider value={props.tableID}>
            <Table/>
        </TableIDCtx.Provider>
    </div>;
}
