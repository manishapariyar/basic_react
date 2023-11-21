import { AiFillDelete } from "react-icons/ai";
function Items({itemsName,date,deleteitem}){

return (
  <form className="row m-row"onSubmit={()=>deleteitem(itemsName)}>
    <div className="col-6"> {itemsName} </div>
    <div className="col-4">{date}</div>
    <div className="col-2"><button type="submit"className="btn btn-danger" ><AiFillDelete /></button></div>
  </form>
)
}
export default Items;