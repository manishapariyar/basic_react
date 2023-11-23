import { createContext } from "react";
import { useReducer } from "react";
 export const Todo_ItemsContext = createContext(
  {
    initialTodo:[],
    AddNewItem: ()=>{},
    handleDelet: ()=>{},
  }
 );
  // useReducer
 const reducer = (currentTodoItems, action) =>
 {
  let newItems = currentTodoItems;
  if(action.type==='NEW_ITEM'){
     newItems = [...currentTodoItems,
         {name:action.payload.itemsName,date:action.payload.itemDueDate}]
  }
  else if (action.type ==='DELETE_ITEM'){
     newItems = currentTodoItems.filter((item)=> item.name!== payload.todoItemName);
  };
  return newItems;
 };
 const Todo_ItemsContextProvider= ({children}) =>{

  const [initialTodo,dispatchTodoItem] = useReducer(reducer , []);
    // const [initialTodo , setTodo] = useState([]);
    const  AddNewItem = (itemsName, itemDueDate)=>
    {
      // using usereducer Action object
      const newItemAction ={
        type: "NEW_ITEM",
        payload:{
          itemsName,
          itemDueDate,
        },
      };
      dispatchTodoItem(newItemAction);
      // let newItems = [...initialTodo,
      //    {name:itemsName,date:itemDueDate}];
      // setTodo(newItems);
    };

    const handleDelet=(todoItemName)=>{
      const deleteItemAction = {
        type: 'DELETE_ITEM',
        payload:{
          todoItemName,
        },
      };
     
    };
    return <Todo_ItemsContext.Provider value={{
      initialTodo,
      AddNewItem,
      handleDelet,
     }} > 
     {children}
     </Todo_ItemsContext.Provider>
 }
 export  default Todo_ItemsContextProvider