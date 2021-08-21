import React from 'react'
import './App.css'
import Input from './components/Input/Input'
import Button from './components/Button/Button'

const App = props => {
    debugger
    return (
        <div className="main">
            <div className="input">
                <Input value={props.state.input.current} />
            </div>
            <div className="buttons">
                <Button
                    current={'C'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button
                    current={'Clearn'}
                    largButton={'largButton'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button
                    current={'/'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button current={7} dispatch={props.onDispatch} />
                <Button current={8} dispatch={props.onDispatch} />
                <Button current={9} dispatch={props.onDispatch} />
                <Button
                    current={'*'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button current={6} dispatch={props.onDispatch} />
                <Button current={5} dispatch={props.onDispatch} />
                <Button current={4} dispatch={props.onDispatch} />
                <Button
                    current={'-'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button current={3} dispatch={props.onDispatch} />
                <Button current={2} dispatch={props.onDispatch} />
                <Button current={1} dispatch={props.onDispatch} />
                <Button
                    current={'+'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button current={'0'} dispatch={props.onDispatch} />
                <Button
                    current={'='}
                    largButton={'largButton'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
                <Button
                    current={'.'}
                    colorBtn={'colorBtn'}
                    dispatch={props.onDispatch}
                />
            </div>
        </div>
    )
}

export default App
