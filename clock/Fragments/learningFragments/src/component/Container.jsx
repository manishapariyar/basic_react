import Style from "./container.module.css"

const Container = (props) =>{
  return <div className={Style['container']}>{props.children}</div>
}
export default Container;