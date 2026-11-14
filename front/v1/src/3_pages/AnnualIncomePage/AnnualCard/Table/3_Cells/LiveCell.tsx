import style from './Cell.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../../../7_redux/store';
import { useState } from 'react';
import { tableActions } from '../../../../../7_redux/annual_table.slice';
import IsDigitInput from './utils/isDigitInput';
import CalculateSum from './utils/calculator';

type LiveCellProps = {
    cellID: string,
    className: 'headercell' | 'bodycell' | 'resultcell',
}

export default function LiveCell(props: LiveCellProps) {
    const cell = useSelector((state: RootState) => state.TABLE.cells[props.cellID]);
    const dispatch = useDispatch();
   
    const [isAwake, setIsAwake] = useState(false);
    const [value, setValue] = useState(cell.value);

    const ActivateCell = () => {
        setIsAwake(true);
    };

    const DeactivateCell = () => {
        setIsAwake(false);
        setValue(CalculateSum(value));
        dispatch(tableActions.SetCellValue({id: props.cellID, value: CalculateSum(value)}));

    };

    const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (IsDigitInput(target.value)) {
            setValue(target.value);
        }
    };

    const KeyHandler = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case 'Escape':
                setIsAwake(false);
                break;
            case 'Enter':
                DeactivateCell();
                setIsAwake(false);
                break;
        }
    };

    if (isAwake) {
        return <input className={style.input} id={props.cellID} value={value}
            onBlur={DeactivateCell}
            onChange={ChangeHandler}
            onKeyDown={KeyHandler}
            autoFocus
        />;
    }

    return <div className={style[props.className]} id={props.cellID}
        onDoubleClick={ActivateCell}
    >
        {value}
    </div>;
}
