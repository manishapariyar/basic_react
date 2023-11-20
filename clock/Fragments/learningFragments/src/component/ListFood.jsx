import styles from "./Listfood.module.css"
const Foods = ({foodItems,ChangeColor,clickedButton}) =>{
return(
  
        <li className={`${styles["n-list"]} list-group-item   ${ChangeColor && 'active'}`}> 
        <span className={styles["kg-span"]}>{foodItems}</span>
        <button className={styles['button']}
         onClick={clickedButton}>Buy</button></li>
         )
} 
 export default Foods;