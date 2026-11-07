import style from './AnnualCard.module.css';
import type { Table as TableDTO} from '../../2_entities/Table';
import { ANNUAL_STUBCOLUMN } from './Table/data/stubs';
import Column from './Table/Column/Column';
import Button from './Button/Button';
// import { tableActions } from '../../7_redux/table.slice';
// import { useDispatch } from 'react-redux';
// import type { AppDispatch } from '../../7_redux/store';
import { useRef, useState } from 'react';
import CreateColumnForm from './Table/Column/CreateColumnForm';

export default function AnnualCard({table}: {table: TableDTO}) {
    // const dispatch = useDispatch<AppDispatch>();
    const [isOpenColumnForm, setIsOpenColumnForm] = useState(false);
    const draggableColumnID = useRef('');
    // const [draggableColumnID, setDraggableColumnID] = useState('');

    const COLUMNS = table.columns.map(column => {
        return <Column 
            key={column.id}
            column={column}
            tableID={table.id}
            // isDraggable={true}
            draggableColumnID={draggableColumnID}
        />;
    });

    return <div className={style.card}>
            <h1>{table.year}</h1>
            {/* <Button action={tableActions.DeleteColumn}>DEL TABLE</Button> */}
            {/* <Button action={tableActions.DeleteColumn}>SAVE AS TEMPLATE</Button> */}
            <Button 
                click={() => {setIsOpenColumnForm(isOpenColumnForm ? false : true);}}
            >
                {isOpenColumnForm ? 'CLOSE FORM' : 'ADD COLUMN'}
            </Button>
            {table.columns.length !== 0 &&
                <div className={style.table}
                >
                    <Column 
                        column={ANNUAL_STUBCOLUMN} 
                        tableID={table.id} 
                        // isDraggable={false}
                        draggableColumnID={draggableColumnID}
                    />
                    {COLUMNS}
                    {isOpenColumnForm && 
                        <CreateColumnForm 
                            tableID={table.id}
                            hideForm={()=>{setIsOpenColumnForm(false);}}
                        />
                    }
                </div>
            }
        </div>;
}
