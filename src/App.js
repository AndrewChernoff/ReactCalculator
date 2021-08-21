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

    /* let button = [
       {id: 1, name: 'C', operation: backSpace}, 
       {id: 2, name: 'Clear', operation: clear}, 
       {id: 3, name: '/', operation: handleClick}, 
       {id: 4, name: '*', operation: handleClick}, 
       {id: 5, name: '7', operation: handleClick}, 
       {id: 6, name: '8', operation: handleClick}, 
       {id: 7, name: '9', operation: handleClick}, 
       {id: 8, name: '-', operation: handleClick}, 
       {id: 9, name: '4', operation: handleClick}, 
       {id: 10, name: '5', operation: handleClick}, 
       {id: 11, name: '6', operation: handleClick}, 
       {id: 12, name: '+', operation: handleClick}, 
       {id: 13, name: '1', operation: handleClick}, 
       {id: 14, name: '2', operation: handleClick}, 
       {id: 15, name: '3', operation: handleClick}, 
       {id: 16, name: '.', operation: handleClick}, 
       {id: 17, name: '0', operation: handleClick}, 
       {id: 18, name: '=', operation: calculate}
    ] 
    let buttons = button.map(b => <Button name={b.name} operation={b.operation} className={b.className} />) */

    return (
        <div className="main">
            <div className="input">
                <input type="text" value={result} />
            </div>

            <div className="buttons">
                <Button name='C' operation={backSpace} className='colorBtn' />
                <Button name='Clear' operation={clear} className='colorBtn' />
                <Button name='/' operation={handleClick} className='colorBtn' />
                <Button name='*' operation={handleClick} className='colorBtn' />
                <Button name='7' operation={handleClick} />
                <Button name='8' operation={handleClick} />
                <Button name='9' operation={handleClick} />
                <Button name='-' operation={handleClick} className='colorBtn' />
                <Button name='4' operation={handleClick} />
                <Button name='5' operation={handleClick} />
                <Button name='6' operation={handleClick} />
                <Button name='+' operation={handleClick} className='colorBtn' />
                <Button name='1' operation={handleClick} />
                <Button name='2' operation={handleClick} />
                <Button name='3' operation={handleClick} />
                <Button name='.' operation={handleClick} className='colorBtn' />
                <Button name='0' operation={handleClick} />
                <Button name='=' operation={calculate} className='largButton' />
            </div>
        </div>
    )
}

export default App