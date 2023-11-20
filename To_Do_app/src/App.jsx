
import Todo from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItems from "./component/TodoItems"
import { useState } from "react"
import TaskWrite from "./component/TaskWrite"
import "./App.css"
function App() {
    const [initialTodo , setTodo] = useState([]);
    const  Entertodo = (itemsName, itemDueDate)=>{
      console.log(`new items ${itemsName} ${itemDueDate}`)
      let newItems = [...initialTodo, {name:itemsName,date:itemDueDate}];
      setTodo(newItems);
    } 
    const handleDelet=(todoItemName)=>{
      const newTodoItems = initialTodo.filter((item)=> item.name!==todoItemName);
       setTodo(newTodoItems)
    
    }
  return (  
  <> 
  <center className= "todo-container">
    <Todo />
    <AppTodo Entertodo={Entertodo}></AppTodo>
    {initialTodo.length === 0 &&<TaskWrite ></TaskWrite>}
    <TodoItems Todoitms={initialTodo} onDeletClick={handleDelet}></TodoItems>
    {/* <TodoItems Todoitms={todoItms}></TodoItems> */}
   </center>
   </>
  )
}

export default App
