import Container from "./component/Container";
import ErrorMessage from "./component/ErrorMessage";
import List from "./component/ListItems";
import css from "./component/listfood.module.css"
import FoodInput from "./component/foodInput";
import { useState } from "react";

function App(){
  let [healthyFoods ,setHealtyFoods]= useState([]);
  const onKeyDown =(event)=>{
    if(event.key==='Enter'){
      let newFoodItem = event.target.value ;
      event.target.value = '';
      let newItems = [...healthyFoods, newFoodItem];
      setHealtyFoods(newItems)
    }
  }
 return (
  <Container>
    <h1 className={css["kg-h1"]}>Healthy food</h1>
    <FoodInput change={onKeyDown}  ></FoodInput>
      <List foods = {healthyFoods}></List>
      <ErrorMessage foods ={healthyFoods}></ErrorMessage>
  </Container>
   
  
 )
}
export default App;