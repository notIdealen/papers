import style from '../Section.module.css';
import { useSelector } from 'react-redux';
import SumColumn from './Columns/SumColumn';
import type { RootState } from '../../../../../../7_redux/store';
import WorkColumn from './Columns/WorkColumn';

type WorkSectionProps = {
    sectionID: string,
    // name: string,
}

export default function WorkSection(props: WorkSectionProps) {
    const section = useSelector((state: RootState) => state.TABLE.sections[props.sectionID]);
    const columnsOrder = useSelector((state: RootState) => state.TABLE.columnIDsOrder[props.sectionID]);

    const COLUMNS = columnsOrder.map(columnID => {
        // console.log(columnID, 'function WorkSection');
        return <WorkColumn key={columnID} columnID={columnID}/>;
    });

    return <div className={style.worksection} id={props.sectionID}/*этот див как див для дропа*/>

        <h1>{section.name}</h1>
        <button>DELETE</button>
        <button>ADD-SECTION</button>
        <div className={style.section}>
            {COLUMNS}
            <SumColumn/>
        </div>
    </div>;
}
