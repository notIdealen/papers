import style from './Section.module.css';
import StubColumn from '../2_Columns/StubColumn';

export default function StubSection() {
    return <div className={style.stubsection}>
        <h1>Period</h1>
        <button>+</button>
        <StubColumn/>
    </div>;
}


