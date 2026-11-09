import { createSlice } from '@reduxjs/toolkit';
import { tableData } from '../99_request_data/normalized_table_data/annual_table.data';
import { AddColumn, AddSection, CreateTable, DeleteColumn, DeleteSection, DragColumn, DragSection, RenameColumn, RenameSection, RenameTable, SetCellValue } from '../3_pages/AnnualIncomePage/AnnualCard/Table/redusers/annual_table.reducers';

const INIT_STATE_TABLE = tableData;

export const tableSlice = createSlice({
    name: 'ANNUAL_TABLE',
    initialState: INIT_STATE_TABLE,
    reducers: {
        SetCellValue: (state, action) => {
            SetCellValue(state, action.payload);
        },
        AddColumn: (state, action) => {
            AddColumn(state, action.payload);
        },
        DeleteColumn: (state, action) => {
            DeleteColumn(state, action.payload);
        },
        DragColumn: (state, action) => {
            DragColumn(state, action.payload);
        },
        RenameColumn: (state, action) => {
            RenameColumn(state, action.payload);
        },
        AddSection: (state, action) => {
            AddSection(state, action.payload);
        },
        DeleteSection: (state, action) => {
            DeleteSection(state, action.payload);
        },
        RenameSection: (state, action) => {
            RenameSection(state, action.payload);
        },
        DragSection: (state, action) => {
            DragSection(state, action.payload);
        },
        CreateTable: (state, action) => {
            CreateTable(state, action.payload);
        },
        RenameTable: (state, action) => {
            RenameTable(state, action.payload);
        },
        DeleteTable: (state, action) => {
            DragSection(state, action.payload);
        },
    },
});

export default tableSlice.reducer;
export const tableActions = tableSlice.actions;
