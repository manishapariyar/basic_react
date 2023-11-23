import { useContext } from "react";
import { Todo_ItemsContext } from "../store/todoitems-store"
import Items from "./AppItems";
const TodoItems = () =>{
 const {initialTodo} = useContext(Todo_ItemsContext);
  return (
  <div className="container ">
   {initialTodo.map((item) => (
   <Items
    key={item.name}
    itemsName={item.name} 
    date={item.date}>
    </Items>
   ))}
  </div>
  );
}
export default TodoItems;