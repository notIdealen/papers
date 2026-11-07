import { useState } from 'react';
import style from './Column.module.css';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../../7_redux/store';
import { tableActions } from '../../../../7_redux/table.slice';

export default function CreateColumnForm ({hideForm, tableID}: {hideForm: ()=>void, tableID: string}) {
    const [columnName, setColumnName] = useState<string>('');
    const [columnType, setColumnType] = useState<string>('vsum'); // 'vsum' как значение по умолчанию
    
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        if (!columnName.trim()) {
            // добавить стиль
            return;
        }

        const payload = {
            tableID: tableID,
            name: columnName.trim(),
            type: columnType,
        };
        dispatch(tableActions.AddColumn(payload));
        hideForm();
    };

    return (
        <div className={style.rowcolumn}>
            <p>Enter column name:</p>
            <input 
                type="text" 
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
                placeholder="Column name"
            />
            <br /><br /><br />
            <p>Choose type:</p>
            <label className={style.label}>
                <input 
                    type="radio" 
                    name="level" 
                    value="vsum" 
                    checked={columnType === 'vsum'}
                    onChange={(e) => setColumnType(e.target.value)}
                />
                Sum all cells
            </label>
            <label className={style.label}>
                <input 
                    type="radio" 
                    name="level" 
                    value="lastvalue" 
                    checked={columnType === 'lastvalue'}
                    onChange={(e) => setColumnType(e.target.value)}
                />
                Last value
            </label>
            <br /><br />
            <button type="button" onClick={handleClick}>CREATE</button>
        </div>
    );
};
