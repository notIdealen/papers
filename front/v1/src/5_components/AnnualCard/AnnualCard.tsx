import style from './AnnualCard.module.css';

export default function AnnualCard() {
    //получить 
    return <div className={style.card}>
            <h1>TABLE NAME</h1>
            <button>CREATE TABLE</button>
            <button>DEL TABLE</button>
            <button>SAVE AS TEMPLATE</button>
            TABLE
        </div>;
}
