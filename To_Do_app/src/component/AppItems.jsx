function Items({itemsName,date}){

return (
  <div className="row m-row">
    <div className="col-6"> {itemsName} </div>
    <div className="col-4">{date}</div>
    <div className="col-2"><button type="button" className="btn btn-danger">delete</button></div>
  </div>
)
}
export default Items;