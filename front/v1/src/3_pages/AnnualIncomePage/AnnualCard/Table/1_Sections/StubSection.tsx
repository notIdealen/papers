import style from './Section.module.css';
import StubColumn from '../2_Columns/StubColumn';

export default function StubSection() {
    return <div className={style.stubsection}>
        <div className={style.calcsection}>
            <h1>Period</h1>
        </div>
        <StubColumn/>
    </div>;
}


