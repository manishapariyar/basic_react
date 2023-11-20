import Items from "./AppItems";
const TodoItems = ({Todoitms,onDeletClick}) =>{
  return (<div className="container ">
   {Todoitms.map((item) => (

   <Items key={item.name} itemsName={item.name} date={item.date} deleteitem={onDeletClick}></Items>
   ))}

  
    </div>
  );
}
export default TodoItems;