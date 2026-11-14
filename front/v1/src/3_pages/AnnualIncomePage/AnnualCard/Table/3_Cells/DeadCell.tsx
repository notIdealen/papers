import style from './Cell.module.css';
import type { ReactNode } from 'react';

type DeadCellProps = {
    className: 'headercell' | 'bodycell' | 'resultcell',
    children: ReactNode,
}

export default function DeadCell(props: DeadCellProps) {
   
    return <div className={style[props.className]}>
            {props.children}
    </div>;
}
