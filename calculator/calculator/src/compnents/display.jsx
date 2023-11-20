import Styles from './App.module.css'
const Display = ({Numbers}) =>{
  return <>
    <input type="text" className={Styles['display']} value={Numbers} readOnly />
  </>
}
export default Display;