import Styles from './App.module.css'
const Button = ({ButtonsName,onButtonClick}) =>{

  return <>
  <div className={Styles['buttons-container']}>
    {ButtonsName.map((num)=><button className={Styles['button']} onClick={()=>onButtonClick(num)}>{num}</button>)}    
      </div>
  </>
}
export default Button;