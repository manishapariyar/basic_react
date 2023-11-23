import Style from './TaskWrite.module.css'
import { useContext } from 'react';
import { Todo_ItemsContext } from '../store/todoitems-store';
const TaskWrite =()=>{
  const {initialTodo}= useContext(Todo_ItemsContext);
 return (
  initialTodo.length === 0 &&<h2 className={Style.taskh1}>Make your day list....</h2>
 )
}
export default TaskWrite;