function AppTodo(){
   return ( 
    <div className="row m-row">
    <div className="col-6"><input type="text" placeholder="Enter your Todo here" /></div>
    <div className="col-4"><input type="date" /></div>
    <div className="col-2"><button type="button" className="btn btn-success">Add</button></div>
  </div>
   )
}
export default  AppTodo;