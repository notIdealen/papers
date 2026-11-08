type Cell = {
    id: string,
    value: string,
}

type ColumnType = 'static' | 'vsum'| 'lastvalue' | 'hsum' | 'total';

type Column = {
    id: string,
    name: string,
    type: ColumnType,
    cells: Cell[],
}

type TableSection = {
    id: string,
    columns: Column[]
}

type Table = {
    id: string,
    year: string,
    block: TableSection,
};


export type {
    Cell,
    ColumnType,
    Column,
    TableSection,
    Table,
};
