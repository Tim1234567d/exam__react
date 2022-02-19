import { useEffect, useState } from "react";
import Content from "../Content/Content";
import Data from "../Data";
import Filter from "../Filter/Filter";
import style from "./Logic.module.scss"


const filterState = [
    { value: -1, text: "все", checked: true },
    { value: 0, text: "Без пересадок", checked: false },
    { value: 1, text: "1 пересадка", checked: false },
    { value: 2, text: "2 пересадки", checked: false },
    { value: 3, text: "3 пересадки", checked: false }
];

export default function Logic() {

    // Filter func
    const [filterData, setFilterData] = useState(filterState);
    const [newDate, setNewDate] = useState(Data); 

    function filterOnChange(index) {
        if (index == 0) {
            setFilterData(filterState);
        }
        else{
            const allReset = [...filterData];
            let resetItem = { ...allReset[0]};
            resetItem.checked = false;
            allReset[0] = resetItem;
            setFilterData(allReset);



            const newData = [...allReset];
            let newCheck = { ...newData[index] };
            newCheck.checked = !newCheck.checked;
            newData[index] = newCheck;
            setFilterData(newData);
        }
    }
    useEffect(function full(){
        let temp = [];  
        const filterSetting = filterData.filter(item => item.checked === true); 
        console.log(filterSetting);
        if(filterSetting[0]?.value === -1 || filterSetting.length === 0){
            temp = Data;  
            setNewDate(temp);
             
        }
        else{
            for(let i = 0; i < Data.length; i++){
                const element = Data[i];
                for(let j = 0; j < filterSetting.length; j++){
                    if(element.transfers.length == filterSetting[j].value){
                        temp.push(element); 
                    }
                }
            }
            setNewDate(temp);
        }
        
    },[filterData]); 
    
    //Sort func

    return (
        <div className={style.container}>
            <Filter filterData={filterData} onchange={filterOnChange} />
            <Content Data={newDate}/>
        </div>

    )
}