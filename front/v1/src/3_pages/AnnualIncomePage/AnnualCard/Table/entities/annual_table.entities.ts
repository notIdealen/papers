type ColumnType = 'static' | 'vsum'| 'lastvalue' | 'hsum' | 'total';

type NCell =    {id: string, value: string, columnId: string};
type NColumn =  {id: string, name: string, type: ColumnType, sectionID: string};
type NSection = {id: string, name: string, tableID: string};
type NTable =   {id: string, name: string};

type NCellMap = Record<string, NCell>;
type NColumnMap = Record<string, NColumn>;
type NSectionMap = Record<string, NSection>;
// type NTables = Record<string, NTable>;

interface NTableState {
    cells: NCellMap,
    columns: NColumnMap,
    sections: NSectionMap,
    tables: NTable[],

    sectionIDsOrder: Record<string, string[]>,
    columnIDsOrder: Record<string, string[]>,
    cellIDsOrder:    Record<string, string[]>,
}

export type {
    ColumnType,
    NCell,
    NColumn,
    NSection,
    NTable,
    NTableState,
    NCellMap,
    NColumnMap,
    NSectionMap,
};
