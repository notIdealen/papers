import type { 
    NTableState,
    ColumnType,
} from '../entities/annual_table.entities';
import {v4 as uuidv4 }from 'uuid';

//*************************************************************************************************************
//UTILS
function clearOrderSet(orderSet: Record<string, string[]>, parentID: string, deletedID: string) {
        orderSet[parentID] = orderSet[parentID].filter(id => {
        return id !== deletedID; 
    });
}

function deleteColumn(state: NTableState, columnID: string) {
    clearOrderSet(state.columnIDsOrder, state.columns[columnID].sectionID, columnID);

    if (state.cellIDsOrder[columnID]) {
        state.cellIDsOrder[columnID].forEach(cellID => {
            delete state.cells[cellID];
        });
        delete state.cellIDsOrder[columnID];
    }
    delete state.columns[columnID];
}

function dragItem(orderSet: Record<string, string[]>, parentID: string, itemID: string, posID: string) {
    const columnIdx = orderSet[parentID].findIndex(id => id === itemID);
    const posIdx = orderSet[parentID].findIndex(id => id === posID);
    if (posIdx < 0 || columnIdx < 0) return;
    orderSet[parentID].splice(posIdx, 0, ...orderSet[parentID].splice(columnIdx, 1));
}
// END UTILS
//*************************************************************************************************************

//SetVslue
export function SetCellValue(state: NTableState, {id, value}: {id: string, value: string}) {
    if (state.cells[id]) {
        state.cells[id].value = value;
    }
}

//AddColumn
export function AddColumn(state: NTableState, 
    {posID, type, name, sectionID}: {posID: string, type: ColumnType, name: string, sectionID: string},
) {
    while (true) {
        const columnID = uuidv4();
        if (state.columns[columnID]) {
            continue;
        }

        state.columns[columnID] = {id: columnID, name, type, sectionID};

        const pos = state.columnIDsOrder[sectionID].findIndex(id => id === posID);
        state.columnIDsOrder[sectionID].splice(pos+1, 0, columnID);
        
        state.cellIDsOrder[columnID] = [];
        for (let i = 0; i < 12; i++) {
            const uuid = uuidv4();
            state.cells[uuid] = {id: uuid, value: '', columnId: columnID};
            state.cellIDsOrder[columnID].push(uuid);
        }
        break;
    }
}

//DeleteColumn
export function DeleteColumn(state: NTableState, {columnID}: {columnID: string}) {
    if (!state.columns[columnID]) return;

    deleteColumn(state, columnID);
}

//RenameColumn
export function RenameColumn(state: NTableState, {columnID, name}: {columnID: string, name: string}) {
    state.columns[columnID].name = name;
}

//DragColumnsectionID
export function DragColumn(state: NTableState, 
    {columnID, posID}: {columnID: string, posID: string}
) {
    dragItem(state.columnIDsOrder, state.columns[columnID].sectionID, columnID, posID);
}

//AddSection
export function AddSection(state: NTableState,
        {posID, columnName, columnType, sectionName, tableID}: 
            {posID: string, columnName: string, columnType: ColumnType, sectionName: string, tableID: string},
) {
    let sectionID: string = '';
    let columnID: string = '';
    while (true) {
        if (!sectionID) sectionID = uuidv4();
        if (state.sections[sectionID]) {
            continue;
        }
        if (!columnID) columnID = uuidv4();
        if (state.columns[columnID]) {
            continue;
        }

        state.columns[columnID] = {id: columnID, name: columnName, type: columnType, sectionID: sectionID};
        state.cellIDsOrder[columnID] = [];
        for (let i = 0; i < 12; i++) {
            const cellID = uuidv4();
            state.cells[cellID] = {id: cellID, value: '', columnId: columnID};
            state.cellIDsOrder[columnID].push(cellID);
        }
        state.columnIDsOrder[sectionID] = [columnID];

        state.sections[sectionID] = {id: sectionID, name: sectionName, tableID: tableID};

        const pos = state.sectionIDsOrder[tableID].findIndex(id => id === posID);
        state.sectionIDsOrder[tableID].splice(pos+1, 0, sectionID);
        break;
    }
}

//DeleteSection
export function DeleteSection(state: NTableState, {sectionID}: {sectionID: string}) {
    if (!state.sections[sectionID]) return;

    clearOrderSet(state.sectionIDsOrder, state.sections[sectionID].tableID, sectionID);

    state.columnIDsOrder[sectionID].forEach(columnID => {
        deleteColumn(state, columnID);
    });
    delete state.columnIDsOrder[sectionID];
    delete state.sections[sectionID];
}

//RenameSection
export function RenameSection(state: NTableState, {sectionID, name}: {sectionID: string, name: string}) {
    if (state.sections[sectionID]) state.sections[sectionID].name = name;
}

//DragSection
export function DragSection(state: NTableState, {sectionID, posID}: {sectionID: string, posID: string}) {
    dragItem(state.sectionIDsOrder, state.sections[sectionID].tableID, sectionID, posID);
}

//CreateTable
//  use AddSection
export function CreateTable(state: NTableState, {name}: {name: string}) {
    console.log(state.tables[0].name, name);
}

//RenameTable
export function RenameTable(state: NTableState, {tableID, name}: {tableID: string, name: string}) {
    const table = state.tables.find(table => table.id === tableID);
    if (table) table.name = name;
}

// //DeleteTable
export function DeleteTable(state: NTableState, {tableID}: {tableID: string}) {
    console.log(state.tables[0].id, tableID);
}
