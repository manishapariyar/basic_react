import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Todo_ItemsContext } from "../store/todoitems-store";
function Items({itemsName,date}){
  const {handleDelet} = useContext(Todo_ItemsContext);

return (
  <form className="row m-row">
    <div className="col-6">{itemsName} </div>
    <div className="col-4">{date}</div>
    <div className="col-2"><button className="btn btn-danger" onClick={()=>handleDelet(itemsName)}><AiFillDelete /></button></div>
  </form>
)
}
export default Items;