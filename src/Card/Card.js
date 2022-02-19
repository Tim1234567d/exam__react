import style from "./Card.module.scss";
export default function Card({price, name, wayMinutes, transfers}){
    if(!price){
        return(
            <p>Билеты не найдены</p>
        )
    }
    else{
        return(
            <div className={style.card}>
            <h2 className={style.price}>{price} P</h2>
            <div className={style.info}>
                <div className={style.name__container}>
                    <p className={`${style.name__placeholder} ${style.placeholder}`}>Авиакомпания</p>
                    <p className={style.name}>{name}</p>
                </div>
                
                <div className={style.way__container}>
                    <p className={`${style.way__placeholder} ${style.placeholder}`}>В пути</p>
                    <p className={style.way}>{wayMinutes}</p>
                </div>
                
                <div className={style.transfers__container}> 
                    <p className={`${style.transfers__placeholder} ${style.placeholder}`}>{transfers.length !== 0? `${transfers.length} пересадки`:"Без пересадок"}</p>
                    <p className={style.transfers}>{transfers}</p>
                </div>
            </div>
        </div>
        )
    }
}