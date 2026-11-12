import style from './Table.module.css';
import StubSection from './1_Sections/StubSection';
import WorkSection from './1_Sections/WorkSection';
import TotalSection from './1_Sections/TotalSection';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../7_redux/store';
import { useTableIDCtx } from '../Context/tableid.context';

export default function Table() {
    const tableID = useTableIDCtx();

    const sectionsOrder = useSelector((state: RootState) => state.TABLE.sectionIDsOrder[tableID]);
    const WORKSECTIONS = sectionsOrder.map(sectionID => {
        return <WorkSection key={sectionID} sectionID={sectionID}/>;
    });

return <div className={style.table}>
        <StubSection/>
        {/* <div> */}
            {WORKSECTIONS}
        {/* </div> */}
        <TotalSection/>
    </div>;
}
