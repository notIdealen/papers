import style from './Column.module.css';
import type { Column as ColumnDTO } from '../../../../2_entities/Table';
import { useId, useRef, useState } from 'react';
import Cell from './Cell/Cell';
import Button from '../../Button/Button';
import type { AppDispatch } from '../../../../7_redux/store';
import { useDispatch } from 'react-redux';
import { tableActions } from '../../../../7_redux/table.slice';

type ColumnProps = {
    column: ColumnDTO,
    tableID: string,
    isDraggable: boolean,
}

let GLOBAL_VAR1: string;

export default function Column({column, tableID, isDraggable}: ColumnProps) {
    const headerUUID = useId();
    const footerUUID = useId();
    const dispatch = useDispatch<AppDispatch>();

    const [draggable, setDraggable] = useState(false);

    const [touched, setTouched] = useState(false);

    const isColumnArea = useRef(0);
    // const draggedColumnID = useRef('');

    let fullClassName = style.column;
    fullClassName = draggable ? fullClassName+' '+style.draggable : fullClassName;
    fullClassName = touched ? fullClassName+' '+style.touched : fullClassName;

    const COLUMN_HEADER = column.type === 'static' ? 
        <Cell cell={{id: headerUUID, value: column.name}} editable={false} type='header' columnID={column.id}/> :
        <Cell cell={{id: headerUUID, value: column.name}} editable={true} type='header' columnID={column.id}/>;

    const COLUMN_CELLS = column.cells.map(cell => {
        return column.type === 'static' ?
            <Cell key={cell.id} cell={cell} editable={false} type='data' columnID={column.id}/> :
            <Cell key={cell.id} cell={cell} editable={true} type='data' columnID={column.id}/>;
    });

    let footer: string = 'Total(Result)';
    switch (column.type) {
        case 'vsum':{
            footer = String(column.cells.reduce((acc, cell) => acc + Number(cell.value), 0));
            break;
        }
        case 'lastvalue': {
            footer = column.cells.reduce((acc, cell) => (cell.value == '' ? acc : acc = cell.value), '');
            break;
        }
    }

    const COLUMN_FOOTER = <Cell cell={{id: footerUUID, value: footer}} editable={false} type='footer' columnID={column.id}/>;
    if (!isDraggable) {
        return <div className={fullClassName} id={column.id} draggable={isDraggable}
        >
            <Button click={()=>{}}>del</Button>
            {COLUMN_HEADER}
            {COLUMN_CELLS}
            {COLUMN_FOOTER}
        </div>;
    };

    return <div className={fullClassName} id={column.id} draggable={isDraggable}
        onDragStart={(e)=>{
            const t = e.target as HTMLElement;
            // draggedColumnID.current = t.id;
            GLOBAL_VAR1 = t.id;
            setDraggable(true);
        }}// получить id и наложить эффекты на выбранный элемент
        onDragEnter={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            isColumnArea.current++;
            if (isColumnArea.current === 1) {
                setTouched(true);
            }
        }}// наложить эффекты элементу над которым проносят, получу id для замены
        onDragLeave={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            isColumnArea.current--;
            if (isColumnArea.current === 0) {
                setTouched(false);
            }
        }}// вернуть первоначальный вид элементу, удалить id.
        onDragOver={(e)=>{e.preventDefault();}}// разрешает сброс, установить превентдефаулт. или тут получать id
        onDrop={(e)=>{
            e.preventDefault();
            e.stopPropagation();

            const t = e.target as HTMLElement;
            // console.log('drop:', e.dataTransfer.items.);
            isColumnArea.current = 0; 
            setTouched(false);
            // console.log('dcid:', draggedColumnID.current);
            if (!t.id ||  t.id === GLOBAL_VAR1) {
                console.log('bad ass');
                return;
            }
            dispatch(tableActions.DragColumn({tableID: tableID, draggedColumnID: GLOBAL_VAR1, posID: t.id}));
        }} // дропает элемент, завершение
        onDragEnd={()=>{setDraggable(false); GLOBAL_VAR1 = '';}}
    >
        <Button click={()=>{dispatch(tableActions.DeleteColumn({id: column.id}));}}>del</Button>
        <span>move</span>
        {COLUMN_HEADER}
        {COLUMN_CELLS}
        {COLUMN_FOOTER}
    </div>;
};
