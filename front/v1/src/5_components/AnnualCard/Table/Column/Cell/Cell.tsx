import style from './Cell.module.css';
import type { Cell as CellDTO } from '../../../../../2_entities/Table';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../../../7_redux/store';
import { tableActions } from '../../../../../7_redux/table.slice';
import ValidateAndCalculate from './utils/calculator';
import IsDigitInput from './utils/isDigitInput';
import GetClassName from './utils/GetClassName';

type CellProps = {
    cell: CellDTO,
    editable: boolean,
    type: 'header' | 'data' | 'footer',
    columnID: string,
}

export default function Cell({cell, editable, type, columnID}: CellProps) {
    const dispatch = useDispatch<AppDispatch>();
    
    const [isInvalidValue, setIsInvalidValue] = useState(false);
    
    const [isInput, setIsInput] = useState(false);
    
    const DUMMY_CELL: CellDTO = {id: '', value: ''};
    const [input, setInput] = useState<CellDTO>(DUMMY_CELL);
    
    const cellClassName = GetClassName(type, false);

    if (!isInput) {
        if (editable) {
        return <div 
            onDoubleClick={() => {
                setIsInput(true);
                setInput({id: cell.id, value: cell.value});
            }}
            id={cell.id}
            className={isInvalidValue ? style[cellClassName] + ' ' + style.invalid : style[cellClassName]}
        >
            {cell.value}
        </div>;
        }
        return <div 
            id={cell.id}
            className={style[cellClassName]}
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
            setIsInput(false);
            dispatch(tableActions.SetColumTitle({columnID: columnID, value: input.value}));
            return;
        }

        const value = ValidateAndCalculate(input.value);
        if (value === '-1') {
            setIsInvalidValue(true);
            setIsInput(false);
            dispatch(tableActions.SetValue({id: input.id, value: input.value}));
            return;
        }

        setIsInvalidValue(false);
        setIsInput(false);
        dispatch(tableActions.SetValue({id: input.id, value: value}));
    };

    const PressKey = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case 'Escape': {
                setInput(DUMMY_CELL);
                setIsInput(false);
                break;
            }
            case 'Enter': {
                Blur();
                break;
            }
        }
    };
    const inputClassName = GetClassName(type, true);

    return <input
        onChange={InputValue}
        onKeyDown={PressKey}
        onBlur={Blur}
        autoFocus
        type='text'
        id={input.id}
        className={isInvalidValue ? style[inputClassName] + ' ' + style.invalid : style[inputClassName]}
        value={input.value}
    />;
}
