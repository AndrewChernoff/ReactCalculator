import React from 'react'
import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

const App = () => {
    return (
        <div className="main">
            <div className="input">
                <Input />
            </div>
            <div className="buttons">
                <Button current={'C'} colorBtn={'colorBtn'} />
                <Button
                    current={'Clearn'}
                    largButton={'largButton'}
                    colorBtn={'colorBtn'}
                />
                <Button current={'/'} colorBtn={'colorBtn'} />
                <Button current={7} />
                <Button current={8} />
                <Button current={9} />
                <Button current={'*'} colorBtn={'colorBtn'} />
                <Button current={6} />
                <Button current={5} />
                <Button current={4} />
                <Button current={'-'} colorBtn={'colorBtn'} />
                <Button current={3} />
                <Button current={2} />
                <Button current={1} />
                <Button current={'+'} colorBtn={'colorBtn'} />
                <Button current={'0'} />
                <Button
                    current={'='}
                    largButton={'largButton'}
                    colorBtn={'colorBtn'}
                />
                <Button current={'.'} colorBtn={'colorBtn'} />
            </div>
        </div>
    )
}

export default App
