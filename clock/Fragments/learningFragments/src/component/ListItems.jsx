import { useState } from "react";
import Foods from "./ListFood"
const List = ({foods}) =>{

  let [activeItem, setActiveItems] = useState([]);
  let onBuyButton =(item , event)=>{
    let newItems = [...activeItem, item];
    setActiveItems(newItems);
  }

 return(
  <ul className="list-group">
  {foods.map((item)=>(
   <Foods 
     key= {item}
     foodItems = {item}
     ChangeColor = {activeItem.includes(item)}
     clickedButton={(event)=>onBuyButton(item,event)}
     ></Foods>
  ))} 
</ul>
 )
}
export default List;