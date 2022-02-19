import style from "./Filter.module.scss";
import { nanoid } from 'nanoid';
export default function Filter({ onchange, filterData }) {

    return (
        <div className={style.container}>
            <h4 className={style.title}>Количество пересадок</h4>
            {
                filterData.map((item, index) => {
                    return <div onClick={()=>{onchange(index)}} key={nanoid()} className={`${style.item} ${item.checked ? style.item_true : style.item_false}`}>
                        <div className={`${style.checkbox} ${item.checked ? style.true : style.false}`}></div>
                        <p className={style.text}>{item.text}</p>
                    </div>
                })
            }
        </div>
    )
}