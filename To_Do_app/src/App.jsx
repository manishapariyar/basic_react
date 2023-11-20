
import Todo from "./component/AppName"
import AppTodo from "./component/AppTodo"
import TodoItems from "./component/TodoItems"
import "./App.css"
function App() {
   const todoItms = [
   {
    name: 'Eat Breakfast',
    date:'15-11-2023'
   },
   {
    name: 'Read Book',
    date:'15-11-2023'
   },
   {
    name: 'Goto College',
    date:'15-11-2023'
   },
   ]
  return ( 
  <> 
  <center className= "todo-container">
    <Todo />
    <AppTodo/>
    <TodoItems Todoitms={todoItms}></TodoItems>
    {/* <TodoItems Todoitms={todoItms}></TodoItems> */}
   </center>
   </>
  )
}

export default App
