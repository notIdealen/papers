import style from './Table.module.css';
import StubSection from './Sections/StubSection/StubSection';
import WorkSection from './Sections/WorkSection/WorkSection';
import TotalSection from './Sections/TotalSection/TotalSection';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../7_redux/store';
import { useTableIDCtx } from '../Context/tableid.context';

// type TableProps = {
//     // tableID: string,
// }

export default function Table() {
    const ctx = useTableIDCtx();

    const sectionsOrder = useSelector((state: RootState) => state.TABLE.sectionIDsOrder[ctx]);

    const WORKSECTIONS = sectionsOrder.map(sectionID => {
        return <WorkSection key={sectionID} sectionID={sectionID}/>;
    });
// console.log(WORKSECTIONS);
    return <div className={style.table}>
        <StubSection/>
        {WORKSECTIONS}
        <TotalSection/>
    </div>;
}
