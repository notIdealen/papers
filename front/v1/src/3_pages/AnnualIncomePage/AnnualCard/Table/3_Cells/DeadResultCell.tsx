import { useSelector } from 'react-redux';
import style from './Cell.module.css';
import type { RootState } from '../../../../../7_redux/store';

type DeadResultCellProps = {
    columnID: string,
    className: 'headercell' | 'bodycell' | 'resultcell',
}

export default function DeadResultCell(props: DeadResultCellProps) {
    const value = useSelector((state: RootState) => state.TABLE.columnResult[props.columnID]);

    return <div className={style[props.className]}>
        {value}
    </div>;
}
