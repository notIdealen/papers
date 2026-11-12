import style from './Cell.module.css';
import type { ReactNode } from 'react';

type LiveHeaderCellProps = {
    cellID: string,
    className: 'headercell' | 'bodycell' | 'resultcell',
    children: ReactNode,
}

export default function LiveHeaderCell(props: LiveHeaderCellProps) {
   
    return <div className={style[props.className]} id={props.cellID}>
        {props.children}
    </div>;
}
