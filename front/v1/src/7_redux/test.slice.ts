import { createSlice } from '@reduxjs/toolkit';
import type { TestData } from '../2_entities/test.entities';


const INIT_STATE_TEST: TestData[] = [{id: '01', value: '123'}, {id: '02', value: '-65412'}];


export const testSlice = createSlice({
    name: 'testSlice',
    initialState: INIT_STATE_TEST,
    reducers: {
        setValue: (state: TestData[], action: {type: string, payload: TestData}) => {
            console.log('USE SETVALUE');
            const cell = state.find(cell => {
                return cell.id === action.payload.id;
            });
            if (cell) {
                cell!.value = action.payload.value;
            }
        },
    },
});

export default testSlice.reducer; // экспорт для root
export const testActions = testSlice.actions; // экспорт редьюсеров. Использую в компонентах, передаю в dispatch
