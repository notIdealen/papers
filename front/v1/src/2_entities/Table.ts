// import { ColumnType } from '../1_constants/hz_enums';

type Cell = {
    id: string,
    value: string,
}

type ColumnType = 'static' | 'vsum'| 'lastvalue' | 'hsum';

type Column = {
    id: string,
    name: string,
    type: ColumnType,
    cells: Cell[],
    // колонки для суммирования для типа colsum: string[],
}

type Table = {
    id: string,
    year: string,
    columns: Column[]
};


export type {
    Cell,
    ColumnType,
    Column,
    Table,
};
