import { useState, type ReactNode } from 'react';
import style from './DnD.module.css';

const Card = ({children, id}:{children: ReactNode, id: string}) => {
    const [onElement, setOnElement] = useState(false);

    return <div className={style.card} draggable id={id}
        style={onElement ?{backgroundColor: 'red'}:{backgroundColor: 'yellow'}}
        // {onElement ?? style={{backgroundColor: 'red'}}}
        onDragStart={e => console.log('onDragStart', e)}
        onDragEnter={e => {console.log('onDragEnter', e); setOnElement(true);}}
        onDragLeave={e => {console.log('onDragEnter', e); setOnElement(false);}}
        onDragOver={e => {e.preventDefault();}}
        onDrop={e => {
            e.preventDefault(); // Разрешаем стандартное действие (например, вставку текста)
            console.log('onDrop', e);
            setOnElement(false);
        }}
    >
        {children}
    </div>;
};

export default function DNDCard() {
    return <div className={style.container}>
        <Card id='111'>111</Card>
        <Card id='222'>222</Card>
        <Card id='333'>333</Card>
        <div className={style.card} draggable id='444'>$$$</div>
    </div>;
}
