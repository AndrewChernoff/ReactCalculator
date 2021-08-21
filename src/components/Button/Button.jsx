import React from 'react'

const Button = props => {
    return (
        <button
            className={!props.largButton ? null : props.largButton}
            id={props.colorBtn}
        >
            {props.current}
        </button>
    )
}

export default Button
