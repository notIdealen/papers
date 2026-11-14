import style from './Section.module.css';
import TotalColumn from '../2_Columns/TotalColumn';

export default function TotalSection() {

    return <div className={style.worksection}/*этот див как див для дропа*/>
        <div className={style.calcsection}>
            <h1>TOTAL</h1>
        </div>
        <div className={style.section}>
            <TotalColumn/>
        </div>
    </div>;
}
