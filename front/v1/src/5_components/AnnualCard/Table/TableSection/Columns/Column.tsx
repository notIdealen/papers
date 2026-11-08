import style from './Column.module.css';
// import type { Column as ColumnDTO } from '../../../../2_entities/Table';
// import { useId, useRef, useState, type RefObject } from 'react';
// import Cell from './Cell/Cell';
// import Button from '../../Button/Button';
// import type { AppDispatch } from '../../../../7_redux/store';
// import { useDispatch } from 'react-redux';
// import { tableActions } from '../../../../7_redux/table.slice';

// type ColumnProps = {
//     column: ColumnDTO,
//     tableID: string,
//     draggableColumnID: RefObject<string>,
// }

export default function Column() {

    return <div className={style.column}>
        <div>PANEL
            <button>B1</button>
            <button>B2</button>
        </div>
        HEADER
        CELLS
        FOOTER
    </div>;
};
