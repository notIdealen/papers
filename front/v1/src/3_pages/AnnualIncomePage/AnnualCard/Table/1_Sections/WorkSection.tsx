import style from './Section.module.css';
import { useSelector } from 'react-redux';
import SumColumn from '../2_Columns/SumColumn';
import type { RootState } from '../../../../../7_redux/store';
import WorkColumn from '../2_Columns/WorkColumn';

type WorkSectionProps = {
    sectionID: string,
    // name: string,
}

export default function WorkSection(props: WorkSectionProps) {
    const section = useSelector((state: RootState) => state.TABLE.sections[props.sectionID]);
    const columnsOrder = useSelector((state: RootState) => state.TABLE.columnIDsOrder[props.sectionID]);

    const COLUMNS = columnsOrder.map(columnID => {
        return <WorkColumn key={columnID} columnID={columnID}/>;
    });

    return <div className={style.worksection} id={props.sectionID}/*этот див как див для дропа*/>
        <h1>{section.name}</h1>
        <button>DELETE</button>
        <button>ADD-SECTION</button>
        <div className={style.section}>
            {COLUMNS}
            <SumColumn sectionID={props.sectionID}/>
        </div>
    </div>;
}
