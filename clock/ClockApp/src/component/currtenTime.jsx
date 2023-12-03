import { useEffect } from "react";
import { useState } from "react";

function CTime(){
   const [time, settime]=useState(new Date());
  useEffect(()=>{
    const intervalid = setInterval(()=>{
      settime(new Date());
    },1000);

    return () =>{
      clearInterval(intervalid);
    }
  },[])
 
  return  <div className="lead">This is the current time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</div>
  }
export default CTime;