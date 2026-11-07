import style from './Input-redux.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../7_redux/store';
import { testActions } from '../../7_redux/test.slice';
import type { TestData } from '../../2_entities/Test';

type CellInfo = {
    id: string,
    value: string,
}

export default function InputRedux(){
    const DATA: TestData[] = useSelector<RootState, TestData[]>(state => state.TEST);
    // const DATA: TestData[] = useSelector<RootState>(state => state.TEST) as TestData[];
    const dispatch = useDispatch<AppDispatch>();

    const dummyCell: CellInfo = {id: '', value: ''};
    const [cell, setCell] = useState<CellInfo>(dummyCell); 

    const ActivateCell = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if(target.tagName === 'INPUT') {
            return;
        }
        if (target.role != 'cell') {
            setCell(dummyCell);
            return;
        }
        setCell({id: target.id, value: target.innerText});
    };

    const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setCell({id: cell.id, value: target.value});
    };

    const PressKey = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case 'Escape': {
                setCell(dummyCell);
                break;
            }
            case 'Enter': {
                const target = e.target as HTMLInputElement;
                const action = testActions.setValue({id: target.id, value: target.value});
                console.log('Create action', testActions.setValue({id: target.id, value: target.value}));
                dispatch(action);
                setCell(dummyCell);
                break;
            }
        }
    };

    const cells = DATA.map( data => {
            return cell.id == data.id ? 
                <input 
                    key={data.id} 
                    id={data.id} 
                    value={cell.value} 
                    autoFocus
                    className={style.input} 
                    onChange={Change}
                    onKeyDown={PressKey}
                    onBlur={(e) => {
                        const target = e.target as HTMLInputElement;
                        dispatch(testActions.setValue({id: target.id, value: target.value}));
                        setCell(dummyCell);
                    }}
                /> : 
                <div 
                    key={data.id} 
                    id={data.id} 
                    className={style.cell} 
                    role='cell'
                    data-group='222'
                >
                    {data.id == cell.id ? cell.value : data.value}
                </div>;
        } );

    return <div className={style.parent} onDoubleClick={ActivateCell} data-set='12'>
        MAIN
        {cells}
    </div>;
};
