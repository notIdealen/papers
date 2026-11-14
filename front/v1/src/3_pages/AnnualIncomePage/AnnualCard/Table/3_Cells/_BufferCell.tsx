import style from './Cell.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';
import { useState } from 'react';
import InputCell from './InputCell';
import LiveCell from './LiveCell';

type LiveCellProps = {
    cellID: string,
    className: 'headercell' | 'bodycell' | 'resultcell',
}

export default function CellSwitcher(props: LiveCellProps) {
    const cell = useSelector((state: RootState) => state.TABLE.cells[props.cellID]);
   
    const [activate, setActivate] = useState(false);

    if (activate) {
        return <InputCell/>;
    }
// LiveCell
    return <LiveCell className={props.className} cellID={}></LiveCell>;
    
    // <div className={style[props.className]} id={props.cellID}>
    //     {cell.value}
    // </div>;
}
