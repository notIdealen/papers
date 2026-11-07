import type { Cell, Column, ColumnType } from '../../../../2_entities/Table';
import {v4 as uuidv4 }from 'uuid';

export function CreateCell(value: string): Cell {
    const uuid = uuidv4();
    return {
        id: uuid,
        value: value,
    };
}

export function CreateColumn(title: string, type: ColumnType): Column {
    const cells: Cell[] = [];
    for (let i = 0; i < 12; i++) {
        cells.push(CreateCell(''));
    }
    const uuid = uuidv4();
    return {
        id: uuid,
        name: title,
        type: type,
        cells: cells,
    };
}
