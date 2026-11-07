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

let GLOBAL_VAR_DRAGGABLE_COLUMN_ID: string;

export default function Column({column, tableID, isDraggable}: ColumnProps) {
    const headerUUID = useId();
    const footerUUID = useId();
    const dispatch = useDispatch<AppDispatch>();

    const [draggableStyle, setDraggableStyle] = useState(false);
    const [touchedStyle, setTouchedStyle] = useState(false);

    const position = useRef(0);

    let fullClassName = style.column;
    fullClassName = draggableStyle ? fullClassName+' '+style.draggable : fullClassName;
    fullClassName = touchedStyle ? fullClassName+' '+style.touched : fullClassName;

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
        onDragStart={()=>{
            GLOBAL_VAR_DRAGGABLE_COLUMN_ID = column.id;
            setDraggableStyle(true);
        }}// получить id и наложить эффекты на выбранный элемент

        onDragEnter={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            position.current++;
            if (position.current === 1) {
                setTouchedStyle(true);
            }
        }}// наложить эффекты элементу над которым проносят, получу id для замены

        onDragLeave={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            position.current--;
            if (position.current === 0) {
                setTouchedStyle(false);
            }
        }}// вернуть первоначальный вид элементу, удалить id.

        onDragOver={(e)=>{e.preventDefault();}}// разрешает сброс, установить превентдефаулт. или тут получать id

        onDrop={(e)=>{
            // console.log('>>>>>>', column, position.current);
            e.preventDefault();
            e.stopPropagation();
            if (column.id === GLOBAL_VAR_DRAGGABLE_COLUMN_ID) {
                return;
            }
            dispatch(tableActions.DragColumn({tableID: tableID, columnID: GLOBAL_VAR_DRAGGABLE_COLUMN_ID, posID: column.id}));
            setTouchedStyle(false);
            position.current = 0;
        }} // дропает элемент, завершение

        onDragEnd={()=>{setDraggableStyle(false); GLOBAL_VAR_DRAGGABLE_COLUMN_ID = '';}}
    >
        <Button click={()=>{dispatch(tableActions.DeleteColumn({id: column.id}));}}>del</Button>
        {COLUMN_HEADER}
        {COLUMN_CELLS}
        {COLUMN_FOOTER}
    </div>;
};
