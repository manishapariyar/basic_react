
import Todo from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItems from "./component/TodoItems"
import TaskWrite from "./component/TaskWrite"
import Todo_ItemsContextProvider from "./store/todoitems-store"
import "./App.css"
 function App() {
  return (  
  <>
  <Todo_ItemsContextProvider>
  <div className= "todo-container">
    <Todo />
    <AppTodo ></AppTodo>
    <TaskWrite ></TaskWrite>
    <TodoItems></TodoItems>
   </div>
  </Todo_ItemsContextProvider>
  
  </>
  )
}
 
export default App;
