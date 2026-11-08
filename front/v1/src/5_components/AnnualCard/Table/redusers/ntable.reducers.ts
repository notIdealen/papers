import type { 
    NTableData,
    ColumnType,
    // NColumn,
} from '../entities/tableEntities_nmz';
import {v4 as uuidv4 }from 'uuid';


//SetVslue
export function SetCellValue(tables: NTableData, {id, value}: {id: string, value: string}) {
    if (tables.cells[id]) {
        tables.cells[id].value = value;
    }
}

//AddColumn
export function AddColumn(tables: NTableData, 
    {posID, type, name, sectionID}: {posID: string, type: ColumnType, name: string, sectionID: string},
) {
    while (true) {
        const columnID = uuidv4();
        if (tables.columns[columnID]) {
            continue;
        }

        tables.columns[columnID] = {id: columnID, name, type, sectionID};

        const pos = tables.columnIDsOrder[sectionID].findIndex(id => id === posID);
        tables.columnIDsOrder[sectionID].splice(pos+1, 0, columnID);
        
        tables.cellIDsOrder[columnID] = [];
        for (let i = 0; i < 12; i++) {
            const uuid = uuidv4();
            tables.cells[uuid] = {id: uuid, value: '', columnId: columnID};
            tables.cellIDsOrder[columnID].push(uuid);
        }
        break;
    }
}

//DeleteColumn
export function DeleteColumn(tables: NTableData, {columnID}: {columnID: string}) {
    const section = tables.columns[columnID].sectionID;
    if (tables.cellIDsOrder[columnID]) {
        tables.cellIDsOrder[columnID].forEach(cellID => {
            delete tables.cells[cellID];
        });

        delete tables.cellIDsOrder[columnID];
    }

    delete tables.columns[columnID];

    tables.columnIDsOrder[section] = tables.columnIDsOrder[section].filter(id => {
        return id !== columnID; 
    });
}

//RenameColumn
export function RenameColumn(tables: NTableData, {columnID, name}: {columnID: string, name: string}) {
    tables.columns[columnID].name = name;
}

//DragColumn
export function DragColumn(tables: NTableData, 
    {sectionID, columnID, posID}: {sectionID: string, columnID: string, posID: string}
) {
    const columnIdx = tables.columnIDsOrder[sectionID].findIndex(id => id === columnID);
    const posIdx = tables.columnIDsOrder[sectionID].findIndex(id => id === posID);
    if (posIdx < 0 || columnIdx < 0) return;
    tables.columnIDsOrder[sectionID].splice(posIdx, 0, ...tables.columnIDsOrder[sectionID].splice(columnIdx, 1));
}

//
//AddSection
export function AddSection(tables: NTableData,
        {posID, name, tableID}: {posID: string, name: string, tableID: string},
) {
    
}

//RenameSection
//DeleteSection
//DragSection
//
//CreateTable
//RenameTable
//DeleteTable
