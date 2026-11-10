import style from '../Section.module.css';
import StubColumn from './StubColumn';

export default function StubSection() {
    return <div className={style.stubsection}>
        <button>+</button>
        <StubColumn/>
    </div>;
}


