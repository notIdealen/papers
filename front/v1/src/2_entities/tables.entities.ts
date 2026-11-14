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
}

type Section = {
    id: string,
    name: string,
    columns: Column[],
    isIncludeInCalc: boolean,
}

type Table = {
    id: string,
    name: string,
    sections: Section[],
};


export type {
    Cell,
    ColumnType,
    Column,
    Section,
    Table,
};
