function CTime(){
  let currentDate = new Date();
 
  return  <div className="lead">This is the current time:{currentDate.toLocaleDateString()}-{currentDate.toLocaleTimeString()}</div>
  }
export default CTime;