import React from "react";

const Keypad = ({onClick}) =>{
    
    const handleClick = (value) => {
        onClick(value);
    };
    return(
        <div className="keypad">
            <div className="button-row">
                <button className='top' onClick={() =>{handleClick('AC')}}>AC</button>
                <button className='top' onClick={() =>{handleClick('+/-')}}>+/-</button>
                <button className='top' onClick={() =>{handleClick('%')}}>%</button>
                <button className='last-button' onClick={() =>{handleClick('/')}}>/</button>
            </div>
            <div className="button-row">
                <button onClick={() =>{handleClick('7')}}>7</button>
                <button onClick={() =>{handleClick('8')}}>8</button>
                <button onClick={() =>{handleClick('9')}}>9</button>
                <button onClick={() =>{handleClick('x')}} className='last-button'>x</button>
            </div>
            <div className="button-row">
                <button onClick={() =>{handleClick('4')}}>4</button>
                <button onClick={() =>{handleClick('5')}}>5</button>
                <button onClick={() =>{handleClick('6')}}>6</button>
                <button onClick={() =>{handleClick('-')}} className='last-button'>-</button>
            </div>
            <div className="button-row">
                <button onClick={() =>{handleClick('1')}}>1</button>
                <button onClick={() =>{handleClick('2')}}>2</button>
                <button onClick={() =>{handleClick('3')}}>3</button>
                <button onClick={() =>{handleClick('+')}}className='last-button'>+</button>
            </div>
            <div className="button-row">
                <button onClick={() =>{handleClick('0')}} className="zero-btn">0</button>
                <button onClick={() =>{handleClick('.')}} className='decimal-btn'>.</button>
                <button onClick={() =>{handleClick('=')}} className='last-button'>=</button>
            </div>
        </div>
    )

}
export default Keypad