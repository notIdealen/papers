import style from './Section.module.css';
import TotalColumn from '../2_Columns/TotalColumn';

export default function TotalSection() {

    return <div className={style.worksection}/*этот див как див для дропа*/>
        <h1>TOTAL</h1>
        <button>ADDSec</button>
        <div className={style.section}>
            <TotalColumn/>
        </div>
    </div>;
}
