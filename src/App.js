import './App.css';
import React, {useState} from 'react';
import DisplayScreen from './Components/DisplayScreen'
import Keypad from './Components/Keypad';
import { add, sub, mul, div } from './Actions/CalculatorActions.js'

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleOnClick = (value) =>{
    console.log("Previous Value:", previousValue);
    console.log("Current Value:", currentValue);
    console.log("Operator:", operator);
    if(value === 'AC'){
      setDisplayValue('0');
      setCurrentValue('');
      setPreviousValue('')
      setOperator('')
    }else if(value === "="){
      if(operator !== '' && currentValue !== ''){
        let result
        switch (operator){
          case '+':
            result = add(parseFloat(previousValue), parseFloat(currentValue));
            break;
          case '-':
            result = sub(parseFloat(previousValue), parseFloat(currentValue));
            break;
          case 'x':
            result = mul(parseFloat(previousValue), parseFloat(currentValue));
            break;
          case '/':
            result = div(parseFloat(previousValue), parseFloat(currentValue));
            break;
          default:
            return;
        }
        setDisplayValue(result.toString());
        setCurrentValue('');
        setPreviousValue('');
        setOperator('');
      }
    }else if (['+', '-', 'x', '/'].includes(value)) {
      setDisplayValue(value)
      setOperator(value);
      if (currentValue) {
        setPreviousValue(currentValue);
        setCurrentValue('');
      }
    }else{
      setDisplayValue('');
      setCurrentValue(prevValue => prevValue + value);
      if (displayValue === '0') {
        setDisplayValue(value);
      } else {
        setDisplayValue(prevValue => prevValue + value);
      }
    }
  }

  return (
    <div className="App">
        <h2>Calculator APP</h2>
        <div className="container">
          <DisplayScreen displayValue={displayValue}></DisplayScreen>
          <Keypad onClick={handleOnClick}></Keypad>
        </div>
        
    </div>
  );
}

export default App;