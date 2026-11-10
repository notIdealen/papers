import style from './Cell.module.css';
import type { ReactNode } from 'react';

type CellProps = {
    id: string,
    children: ReactNode,
}

export default function StubCell(props: CellProps) {
   
    return <div className={style.cell} id={props.id}>
        {props.children}
    </div>;
}
