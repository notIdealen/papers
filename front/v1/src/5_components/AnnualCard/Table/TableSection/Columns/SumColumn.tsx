import style from './Column.module.css';

export default function SumColumn() {

    return <div className={style.column}>
        <div>PANEL
            <button>B1</button>
            {/* <button>B2</button> */}
        </div>
        HEADER_STATIC-ПОДИТОГ
        CELLS_CALCULATED_HSUM
        FOOTER_VSUM
    </div>;
};
