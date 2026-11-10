import style from './StubColumn.module.css';
import StubCell from '../../Cells/StubCell';
import { useTableIDCtx } from '../../../Context/tableid.context';

export default function StubColumn() {
    const ctx = useTableIDCtx();

    const annualTableIdPrefix: string = ctx+'annualTableStub';
    const columnID = ctx+'stubcolumn';
    const prepareCells = [
        {id: annualTableIdPrefix+'Jan', value: 'January', columnId: columnID},
        {id: annualTableIdPrefix+'Feb', value: 'Febrary', columnId: columnID},
        {id: annualTableIdPrefix+'Mar', value: 'March', columnId: columnID},
        {id: annualTableIdPrefix+'Apr', value: 'April', columnId: columnID},
        {id: annualTableIdPrefix+'May', value: 'May', columnId: columnID},
        {id: annualTableIdPrefix+'Jun', value: 'June', columnId: columnID},
        {id: annualTableIdPrefix+'Jul', value: 'July', columnId: columnID},
        {id: annualTableIdPrefix+'Aug', value: 'August', columnId: columnID},
        {id: annualTableIdPrefix+'Sep', value: 'September', columnId: columnID},
        {id: annualTableIdPrefix+'Oct', value: 'October', columnId: columnID},
        {id: annualTableIdPrefix+'Nov', value: 'November', columnId: columnID},
        {id: annualTableIdPrefix+'Dec', value: 'Decemder', columnId: columnID},
    ];
    const HEADER_CELL = <StubCell id={ctx+'annualtablemonth'}>Month</StubCell>;
    const BODY_CELLS = prepareCells.map(cell => {
        return <StubCell key={cell.id} id={cell.id}>{cell.value}</StubCell>;
    });
    const FOOTER_CELL = <StubCell id={ctx+'annualtableresult'}>Total(Result):</StubCell>;

    return <div className={style.stubcolumn}>
        {HEADER_CELL}
        {BODY_CELLS}
        {FOOTER_CELL}
    </div>;
}
