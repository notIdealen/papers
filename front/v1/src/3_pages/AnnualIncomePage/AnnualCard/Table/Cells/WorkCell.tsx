import style from './Cell.module.css';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';

type CellProps = {
    cellID: string,
}

export default function WorkCell(props: CellProps) {
    const cell = useSelector((state: RootState) => state.TABLE.cells[props.cellID]);
   
    return <div className={style.cell} id={cell.id}>
        {cell.value}
    </div>;
}
