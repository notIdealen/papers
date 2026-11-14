import style from './Column.module.css';
import type { RootState } from '../../../../../7_redux/store';
import { useSelector } from 'react-redux';
import DeadCell from '../3_Cells/DeadCell';
import type { ReactElement } from 'react';

type ResultColumnProps = {
    sectionID: string,
}

export default function ResultColumn(props: ResultColumnProps) {
    const sectionResult = useSelector((state: RootState) => state.TABLE.sectionResults[props.sectionID]);
    
    const HEADER_CELL = <DeadCell className='headercell'>TOTAL_SEC</DeadCell>;

    const CELLS: ReactElement[] = [];
    for (let i = 0; i < sectionResult.length; i++) {
        if (i === sectionResult.length - 1) {
            CELLS.push(<DeadCell key={props.sectionID+i} className='resultcell'>{sectionResult[i]}</DeadCell>);
            continue;
        }
        CELLS.push(<DeadCell key={props.sectionID+i} className='bodycell'>{sectionResult[i]}</DeadCell>);
    }

    return <div className={style.column}>
        <div className={style['header-container']}>
            <div className={style['button-container']}>
                <button className={style.button}>x</button>
                <button className={style.button}>+</button>
            </div>
            {HEADER_CELL}
        </div>
        {CELLS}
    </div>;
};
