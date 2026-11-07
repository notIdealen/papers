import type { ReactNode } from 'react';

interface ButtonProps {
    className: string,
    children: ReactNode,
}

// как-то передать все функции для событий
export default function Button(props: ButtonProps) {
    return <button className={props.className}>{props.children}</button>;
}
