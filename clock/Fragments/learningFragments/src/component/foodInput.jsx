import styles from "./Listfood.module.css"
const FoodInput = ({change})=>{
return <> 
<input type="text" placeholder="Enter what you like" className={styles.foodinput} onKeyDown={change}/> 

</> 
}
export default FoodInput;