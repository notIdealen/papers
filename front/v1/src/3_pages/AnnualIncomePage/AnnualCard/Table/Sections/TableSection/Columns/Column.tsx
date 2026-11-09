import style from './Column.module.css';

// type ColumnProps = {
//     column: ColumnDTO,
//     tableID: string,
//     draggableColumnID: RefObject<string>,
// }

export default function Column() {

    return <div className={style.column}>
        <div>PANEL
            <button>B1</button>
            <button>B2</button>
        </div>
        HEADER
        CELLS
        FOOTER
    </div>;
};
