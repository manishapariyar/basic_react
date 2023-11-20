import Items from "./AppItems";
const TodoItems = ({Todoitms}) =>{
  return (<div className="container ">
   {Todoitms.map((item) => (
   <Items itemsName={item.name} date={item.date}></Items>
   ))}

  
    </div>
  );
}
export default TodoItems;