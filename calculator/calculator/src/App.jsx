import Display from './compnents/display'
import Button from './compnents/buttons'
import Styles from './compnents/App.module.css'
import { useState } from 'react';
function App() {
  const buttonsName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

   const [currentNumber, setNumber] = useState("0");
   
   const currentDisplay = (event) =>{
    // console.log(event)
    if(event ==='C'){
       setNumber("");
    }
    else if(event === '='){
        const result = eval(currentNumber);
        setNumber(result);
    }
    else{
       let newNumber = currentNumber+event;
    setNumber(newNumber);
    }
   }

  return (
    <>
    <div className= {Styles["calculator"]}>
    <Display Numbers={currentNumber}></Display>
    <Button ButtonsName={buttonsName} onButtonClick={currentDisplay}></Button>
    </div>
    </>
  )
}

export default App
