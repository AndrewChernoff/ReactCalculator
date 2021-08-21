import React from 'react'
import { setValue } from '../redux/reducer/inputReducer'

const Button = props => {
    let updateInput = () => {
        debugger
        props.dispatch(setValue(props.current))
    }

    return (
        <button
            className={!props.largButton ? null : props.largButton}
            id={props.colorBtn}
            onClick={updateInput}
        >
            {props.current}
        </button>
    )
}

export default Button
