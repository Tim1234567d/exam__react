import { nanoid } from 'nanoid';
import style from "./Content.module.scss"; 
import Card from "../Card/Card";
export default function Content({Data}){
    return(
        <div className={style.container}>
            {Data.map((item)=>{
                return <Card {...item} key={nanoid()}/>
            })}
        </div>
    )
}