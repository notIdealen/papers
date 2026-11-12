import style from './Cell.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';

type LiveCellProps = {
    cellID: string,
    className: 'headercell' | 'bodycell' | 'resultcell',
}

export default function LiveCell(props: LiveCellProps) {
    const cell = useSelector((state: RootState) => state.TABLE.cells[props.cellID]);
   
    return <div className={style[props.className]} id={props.cellID}>
        {cell.value}
    </div>;
}
