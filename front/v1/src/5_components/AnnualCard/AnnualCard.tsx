import style from './AnnualCard.module.css';
import type { Table as TableDTO} from '../../2_entities/Table';
import { ANNUAL_STUBCOLUMN } from './Table/data/stubs';
import Column from './Table/Column/Column';
import Button from './Button/Button';
// import { tableActions } from '../../7_redux/table.slice';
// import { useDispatch } from 'react-redux';
// import type { AppDispatch } from '../../7_redux/store';
import { useState } from 'react';
import CreateColumnForm from './Table/Column/CreateColumnForm';

export default function AnnualCard({table}: {table: TableDTO}) {
    // const dispatch = useDispatch<AppDispatch>();
    const [openColumnForm, setOpenColumnForm] = useState(false);
    // const [draggableColumnID, setDraggableColumnID] = useState('');

    // const StartDrag = (id: string)=>{
    //     setDraggableColumnID(id);
    // };

    // const DropColumn = (posID: string) => {
    //     dispatch(tableActions.DragColumn({tableID: table.id, columnID: draggableColumnID, posID: posID}));
    // };

    // const EndDrag = () =>{
    //     // setDraggableColumnID('');
    // };

    const COLUMNS = table.columns.map(column => {
        return <Column 
            key={column.id}
            column={column}
            tableID={table.id}
            isDraggable={true}
            // StartDrag={StartDrag}
            // Drop={DropColumn}
            // EndDrag={EndDrag}
        />;
    });

    return <div className={style.card}>
            <h1>{table.year}</h1>
            {/* <Button action={tableActions.DeleteColumn}>DEL TABLE</Button> */}
            {/* <Button action={tableActions.DeleteColumn}>SAVE AS TEMPLATE</Button> */}
            <Button 
                click={() => {setOpenColumnForm(openColumnForm ? false : true);}}
            >
                {openColumnForm ? 'CLOSE FORM' : 'ADD COLUMN'}
            </Button>
            {table.columns.length !== 0 &&
                <div className={style.table}
                >
                    <Column 
                        column={ANNUAL_STUBCOLUMN} 
                        tableID={table.id} 
                        isDraggable={false}
                        // StartDrag={StartDrag}
                        // Drop={DropColumn}
                        // EndDrag={EndDrag}
                    />
                    {COLUMNS}
                    {openColumnForm && 
                        <CreateColumnForm 
                            tableID={table.id}
                            hideForm={()=>{setOpenColumnForm(false);}}
                        />
                    }
                </div>
            }
        </div>;
}
