import style from './Cell.module.css';
import { useMemo, type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';
import type { ColumnType } from '../entities/annual_table.entities';
// import type { ColumnType, NCell, NCellMap } from '../entities/annual_table.entities';
import { createSelector } from '@reduxjs/toolkit';

type FooterCellProps = {
    columnID: string,
    columnType: ColumnType,
    children: ReactNode,
}

// function GetColumnCells(order: string[], cells: NCellMap): NCell[] {
//     return order.map(cellID => cells[cellID]);
// }

// export default function WorkFooterCell(props: FooterCellProps) {
//     const cellsOrder = useSelector((state: RootState) => state.TABLE.cellIDsOrder[props.columnID]);
//     const cells = useSelector((state: RootState) => state.TABLE.cells);

     
//     const columnCells = useMemo(() => {return GetColumnCells(cellsOrder, cells);}, [cells, cellsOrder]);

//     let value: string = '';
//     switch (props.columnType) {
//         case 'vsum': {
//             value = String(columnCells.reduce((acc, cell) => acc + Number(cell.value || 0), 0));
//             break;
//         }
//         case 'lastvalue': {
//             value = columnCells.reduce((acc, cell) => (cell.value == '' ? acc : cell.value), '');
//             break;
//         }
//     }

//     return <div className={style.cell}>
//         {value}
//     </div>;
// }


// 1. ФАБРИКА: Возвращает НОВЫЙ createSelector при каждом вызове
const makeSelectColumnSum = () => createSelector(
    [
        (state: RootState, columnID: string) => state.TABLE.cellIDsOrder[columnID],
        (state: RootState) => state.TABLE.cells
    ],
    (ids, cells) => {
        const sum = ids.reduce((acc, id) => {return acc + Number(cells[id]?.value || 0);}, 0);
        return String(sum);
    }
);

const makeSelectLastValue = () => createSelector(
    [
        (state: RootState, columnID: string) => state.TABLE.cellIDsOrder[columnID],
        (state: RootState) => state.TABLE.cells
    ],
    (ids, cells) => {
        return ids.reduce((acc, id) => {
            const val = cells[id]?.value;
            return val === '' ? acc : val;
        }, '');
    }
);

export default function WorkFooterCell(props: FooterCellProps) {
    const selectSum = useMemo(() => makeSelectColumnSum(), []);
    const selectLast = useMemo(() => makeSelectLastValue(), []);

    const vSum = useSelector((state: RootState) => selectSum(state, props.columnID));
    const lastValue = useSelector((state: RootState) => selectLast(state, props.columnID));
    
    let value: string = '';
    switch (props.columnType) {
        case 'vsum': {
            value = vSum;
            break;
        }
        case 'lastvalue': {
            value = lastValue;
            break;
        }
    }

    return <div className={style.cell}>{value}</div>;
}
