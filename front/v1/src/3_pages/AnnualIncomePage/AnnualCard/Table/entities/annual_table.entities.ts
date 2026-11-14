type ColumnType = 'static' | 'vsum'| 'lastvalue' | 'hsum' | 'total';

type NCell =    {value: string, columnID: string};
type NColumn =  {name: string, type: ColumnType, sectionID: string};
type NSection = {name: string, tableID: string, isIncludeInCalc: boolean};
type NTable =   {name: string};

type NCellMap = Record<string, NCell>;
type NColumnMap = Record<string, NColumn>;
type NSectionMap = Record<string, NSection>;
type NTableMap = Record<string, NTable>;

type NTableResult = Record<string, string[]>;
type NSectionResult = Record<string, string[]>;
type NColumnResult = Record<string, string>;

interface NTablesState {
    cells: NCellMap,
    columns: NColumnMap,
    sections: NSectionMap,
    tables: NTableMap,

    sectionIDsOrder: Record<string, string[]>,
    columnIDsOrder: Record<string, string[]>,
    cellIDsOrder:    Record<string, string[]>,
    tablesOrder: string[],

    tableResult: NTableResult,
    sectionResults: NSectionResult,
    columnResult: NColumnResult,
}

export type {
    ColumnType,
    NCell,
    NColumn,
    NSection,
    NTable,
    NTableMap,
    NTablesState,
    NCellMap,
    NColumnMap,
    NSectionMap,
    NColumnResult,
    NSectionResult,
    NTableResult,
};
