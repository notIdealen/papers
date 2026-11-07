import style from './Button.module.css';
import type { ReactNode } from 'react';
// import type { PayloadActionCreator } from '@reduxjs/toolkit';
// import type { ColumnType } from '../../../2_entities/Table';

// type ButtonProps<T> = {
//     children: ReactNode,
//     payload: T,
//     action: PayloadActionCreator<T>;
// }
// export default function Button<T>(props: ButtonProps<T>) {

type ButtonProps = {
    children: ReactNode,
    click: () =>void,
}

export default function Button({children, click}: ButtonProps) {
    return <button 
        onClick={()=>{click();}}
        className={style.button}
    >
        {children}
    </button>;
}
