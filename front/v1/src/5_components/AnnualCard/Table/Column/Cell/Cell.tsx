import style from '../Column.module.css';// пока использую колонку, потом часть передам в cell.css
import type { Cell as CellDTO } from '../../../../../2_entities/Table';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../../../7_redux/store';
import { tableActions } from '../../../../../7_redux/table.slice';
import ValidateAndCalculate from './utils/calculator';
import IsDigitInput from './utils/isDigitInput';

type CellProps = {
    cell: CellDTO,
    editable: boolean,
    type: 'header' | 'data' | 'footer',
    columnID: string,
}

const DUMMY_CELL: CellDTO = {id: '', value: ''};

export default function Cell({cell, editable, type, columnID}: CellProps) {
    const dispatch = useDispatch<AppDispatch>();

    const [isInvalidValue, setIsInvalidValue] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [input, setInput] = useState<CellDTO>(DUMMY_CELL);

    const ActivateCell = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
            setIsEditing(true);
            setInput({id: target.id, value: target.innerText});
    };

    if (!isEditing) {
        if (editable) {
        return <div 
            onDoubleClick={ActivateCell}
            id={cell.id}
            className={isInvalidValue ? style.cell + ' ' + style.invalid : style.cell}
        >
            {cell.value}
        </div>;
        }
        return <div 
            id={cell.id}
            className={style.cell}
        >
            {cell.value}
        </div>;
    }

    const InputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (type === 'header') {
            setInput({id: input.id, value: target.value});
            return;
        }
        if (IsDigitInput(target.value.charAt(target.value.length - 1))) {
            setInput({id: input.id, value: target.value});
        }
    };
    
    const Blur = () => {
        if (type === 'header') {
            setIsInvalidValue(false);
            setIsEditing(false);
            dispatch(tableActions.SetColumTitle({columnID: columnID, value: input.value}));
            return;
        }

        const value = ValidateAndCalculate(input.value);
        if (value === '-1') {
            setIsInvalidValue(true);
            setIsEditing(false);
            dispatch(tableActions.SetValue({id: input.id, value: input.value}));
            return;
        }

        setIsInvalidValue(false);
        setIsEditing(false);
        dispatch(tableActions.SetValue({id: input.id, value: value}));
    };

    const PressKey = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case 'Escape': {
                setInput(DUMMY_CELL);
                setIsEditing(false);
                break;
            }
            case 'Enter': {
                Blur();
                break;
            }
        }
    };

    return <input
        onChange={InputValue}
        onKeyDown={PressKey}
        onBlur={Blur}
        autoFocus
        type='text'
        id={input.id}
        className={isInvalidValue ? style.input + ' ' + style.invalid : style.input}
        value={input.value}
    />;
}
