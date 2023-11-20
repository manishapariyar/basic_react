import { useState } from "react";

function AppTodo({Entertodo}){
   const [todoname , settodoname] = useState();
   const [todoDate , settodoDate] = useState();
   const handleNameChange = (event)=>{
      settodoname(event.target.value);
   }
   const handleDateChange = (event)=>{
    settodoDate(event.target.value);
   }
   const handleAddButtonClicked =() =>{
      Entertodo(todoname,todoDate);
      settodoname("");
      settodoDate("");
   }

   return ( 
    <div className="row m-row">
    <div className="col-6"><input type="text" placeholder="Enter your Todo here" 
  value={todoname}
    onChange={handleNameChange}/></div>
    <div className="col-4"><input type="date" value={todoDate} onChange={handleDateChange}/></div>
    <div className="col-2"><button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>Add</button></div>
  </div>
   )
}
export default  AppTodo;