import { createSlice } from '@reduxjs/toolkit';
import {annualTables} from '../99_request_data/table_data/data';
import type { Table } from '../2_entities/Table';
import { CreateColumn } from '../5_components/AnnualCard/Table/utils/CreateNewTableElement';

const INIT_STATE_TABLE: Table[] = annualTables;

export const tableSlice = createSlice({
    name: 'ANNUAL_TABLE',
    initialState: INIT_STATE_TABLE,
    reducers: {
        AddColumn: (tables, action) => {
            const table = tables.find(table => action.payload.tableID === table.id);
            table?.columns.push(CreateColumn(action.payload.name, action.payload.type));
        },
        DeleteColumn: (tables, action) => {
            tables.some(table => {
                const columnIdx = table.columns.findIndex(column => column.id === action.payload.id);
                if (0 <= columnIdx) { 
                    table.columns.splice(columnIdx, 1);
                    return true;
                }
                return false;
            });
        },
        DragColumn: (tables: Table[], action:{type: string, payload:{tableID: string, columnID: string, posID: string}}) => {
            // console.log(action.payload.tableID, action.payload.columnID, action.payload.posID);
            const table = tables.find(table => table.id === action.payload.tableID);
            if (table) {
                const posIdx = table.columns.findIndex(column => column.id === action.payload.posID);
                const columnIdx = table.columns.findIndex(column => column.id === action.payload.columnID);
                // const column = table.columns.splice(columnIdx, 1);
                if (posIdx < 0 || columnIdx < 0) return;
                table.columns.splice(posIdx, 0, ...table.columns.splice(columnIdx, 1));
            }

        },
        SetColumTitle: (tables, action) => {
            for (const table of tables) {
                const column = table.columns.find(column => column.id === action.payload.columnID);
                if (column) {
                    column.name = action.payload.value;
                    break;
                }
            }
        },
        SetValue: (tables, action) => {
            tables.
                some(table => table.columns.
                    some(column => {
                        const cell = column.cells.find(cell => cell.id === action.payload.id);
                        if (cell) {
                            cell.value = action.payload.value;
                            return true;
                        }
                        return false;
                    }
                )
            );
        }
    },
});

export default tableSlice.reducer;
export const tableActions = tableSlice.actions;
