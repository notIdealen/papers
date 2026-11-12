import style from './Column.module.css';
import type { RootState } from '../../../../../7_redux/store';
import { useSelector } from 'react-redux';
import DeadCell from '../3_Cells/DeadCell';

type SumColumnProps = {
    sectionID: string,
}

export default function SumColumn(props: SumColumnProps) {
    const sectionResult = useSelector((state: RootState) => state.TABLE.sectionResults[props.sectionID]);
    
    const HEADER_CELL = <DeadCell className='headercell'>TOTAL_SEC</DeadCell>;
    let counter = 0;
    const CELLS = sectionResult.map(value => {
        counter++;
        return <DeadCell key={props.sectionID+counter} className='bodycell'>{value}</DeadCell>;
    });

    return <div className={style.column}>
        <div>
            <button>ADD SEC</button>
        </div>
        {HEADER_CELL}
        {CELLS}
    </div>;
};
