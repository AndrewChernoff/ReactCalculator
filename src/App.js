import React, { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

const App = () => {

    const [result, setResult] = useState('');


    const handleClick = (e) => {

        setResult(result.concat(e.target.name));
    }

    const backSpace = () => {
        setResult(result.slice(0, -1));
    }

    const clear = () => {
        setResult('');
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        }
        catch (err) {
            setResult('Error')
        }
    }
    
    return (
        <div className="main">
            <div className="input">
                <input type="text" value={result} />
            </div>
            <div className="buttons">
                <button name='C' onClick={backSpace}>C</button>
                <button name='Clear' onClick={clear}>Clear</button>
                <button name='/' onClick={handleClick}>/</button>
                <button name='*' onClick={handleClick}>*</button>
                <button name='7' onClick={handleClick}>7</button>
                <button name='8' onClick={handleClick}>8</button>
                <button name='9' onClick={handleClick}>9</button>
                <button name='-' onClick={handleClick}>-</button>
                <button name='4' onClick={handleClick}>4</button>
                <button name='5' onClick={handleClick}>5</button>
                <button name='6' onClick={handleClick}>6</button>
                <button name='+' onClick={handleClick}>+</button>
                <button name='1' onClick={handleClick}>1</button>
                <button name='2' onClick={handleClick}>2</button>
                <button name='3' onClick={handleClick}>3</button>
                <button name='0' onClick={handleClick}>0</button>
                <button onClick={calculate}>=</button>
                <button name='.' onClick={handleClick}>.</button>
            </div>
        </div>
    )
}

export default App
