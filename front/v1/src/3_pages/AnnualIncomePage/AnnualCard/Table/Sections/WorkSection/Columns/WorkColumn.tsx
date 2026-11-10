import style from './Column.module.css';
import HeaderCell from '../../../Cells/HeaderCell';
import WorkCell from '../../../Cells/WorkCell';
import WorkFooterCell from '../../../Cells/WorkFooterCell';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../../../../7_redux/store';

type ColumnProps = {
    columnID: string,
}

export default function WorkColumn(props: ColumnProps) {
    const column = useSelector((state: RootState) => state.TABLE.columns[props.columnID]);//?
    const cellsOrder = useSelector((state: RootState) => state.TABLE.cellIDsOrder[props.columnID]);

    const HEADER_CELL = <HeaderCell>{column.name}</HeaderCell>;

    const CELLS = cellsOrder.map(cellID => {
        return <WorkCell key={cellID} cellID={cellID}/>;
    });
    
    const footerValue: string = '';

    const FOOTER_CELL = <WorkFooterCell columnID={column.id} columnType={column.type}>{footerValue}</WorkFooterCell>;

    return <div className={style.column}>
        <div>
            <button>B1</button>
            <button>B2</button>
        </div>
        {HEADER_CELL}
        {CELLS}
        {FOOTER_CELL}
    </div>;
};
