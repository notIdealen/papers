import type { ReactNode } from 'react';
import style from './Cell.module.css';

type HeaderCellProps = {
    children: ReactNode,
}

export default function HeaderCell(props: HeaderCellProps) {
   
    return <div className={style.cell}>
        {props.children}
    </div>;
}
