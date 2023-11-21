import { useRef } from "react";
import { MdOutlineAddAlarm } from "react-icons/md";
function AppTodo({Entertodo}){
 
   const todoName = useRef();
   const todoDate = useRef();
   let handleAddButtonClicked =(event)=>{
      event.preventDefault();
    const todoNameElement =  todoName.current.value ;
    const todoDateElement = todoDate.current.value ;
    Entertodo(todoNameElement,todoDateElement);
   }
   return ( 
    <form className="row m-row"  onSubmit={handleAddButtonClicked} >
    <div className="col-6"><input ref={todoName} placeholder="Enter your Todo here"/></div>
    <div className="col-4"><input type="date"  ref={todoDate}  /></div>
    <div className="col-2"><button type="sumit" className="btn btn-success"><MdOutlineAddAlarm /></button></div>
  </form>
   )
}

export default  AppTodo;