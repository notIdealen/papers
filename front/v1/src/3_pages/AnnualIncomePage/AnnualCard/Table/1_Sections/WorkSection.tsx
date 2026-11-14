import style from './Section.module.css';
import { useSelector } from 'react-redux';
import ResultColumn from '../2_Columns/ResultColumn';
import type { RootState } from '../../../../../7_redux/store';
import WorkColumn from '../2_Columns/WorkColumn';

type WorkSectionProps = {
    sectionID: string,
}

export default function WorkSection(props: WorkSectionProps) {
    const section = useSelector((state: RootState) => state.TABLE.sections[props.sectionID]);
    const columnsOrder = useSelector((state: RootState) => state.TABLE.columnIDsOrder[props.sectionID]);

    const COLUMNS = columnsOrder.map(columnID => {
        return <WorkColumn key={columnID} columnID={columnID}/>;
    });

    return <div className={style.worksection} id={props.sectionID}/*этот див как див для дропа*/>
        <div className={section.isIncludeInCalc ? style.calcsection : style.nocalcsection}>
            <h1>{section.name}</h1>
        </div>
        <div className={style['column-container']}>
            {COLUMNS}
            <ResultColumn sectionID={props.sectionID}/>
        </div>
    </div>;
}
