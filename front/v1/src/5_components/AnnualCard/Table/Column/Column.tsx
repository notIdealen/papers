import style from './Column.module.css';
import type { Column as ColumnDTO } from '../../../../2_entities/Table';
import { useId, useRef, useState, type RefObject } from 'react';
import Cell from './Cell/Cell';
import Button from '../../Button/Button';
import type { AppDispatch } from '../../../../7_redux/store';
import { useDispatch } from 'react-redux';
import { tableActions } from '../../../../7_redux/table.slice';

type ColumnProps = {
    column: ColumnDTO,
    tableID: string,
    draggableColumnID: RefObject<string>,
}

export default function Column({column, tableID, draggableColumnID}: ColumnProps) {
    const headerUUID = useId();
    const footerUUID = useId();
    const dispatch = useDispatch<AppDispatch>();

    const [DRAG, SETDRAG] = useState(false);
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

    if (column.type === 'static') {
        return <div className={fullClassName} id={column.id}
        >
            <Button click={()=>{}}>EMPTY</Button>
            {COLUMN_HEADER}
            {COLUMN_CELLS}
            {COLUMN_FOOTER}
        </div>;
    };

    return <div 
        className={fullClassName} 
        id={column.id} 
        draggable={DRAG}

        onDragEnter={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            position.current++;
            if (position.current === 1) {
                setTouchedStyle(true);
            }
        }}

        onDragLeave={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            position.current--;
            if (position.current === 0) {
                setTouchedStyle(false);
            }
        }}

        onDragOver={(e)=>{e.preventDefault();}}

        onDrop={(e)=>{
            e.preventDefault();
            e.stopPropagation();
            if (column.id !== draggableColumnID.current) {
                dispatch(tableActions.DragColumn({tableID: tableID, columnID: draggableColumnID.current, posID: column.id}));
            }
            setTouchedStyle(false);
            position.current = 0;
        }}

        onDragEnd={()=>{
            draggableColumnID.current = '';
            setDraggableStyle(false); 
            SETDRAG(false);
        }}
    >
        <Button click={()=>{dispatch(tableActions.DeleteColumn({id: column.id}));}}>del</Button>
        <div className={style.dragarea}
            draggable
            onDragStart={()=>{
                draggableColumnID.current = column.id;
                setDraggableStyle(true);
                SETDRAG(true);
            }}
        >
            {COLUMN_HEADER}
        </div>
        {COLUMN_CELLS}
        {COLUMN_FOOTER}
    </div>;
};
