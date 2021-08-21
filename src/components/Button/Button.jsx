import React from 'react'

const Button = props => {

    return (

        <button name={props.name} onClick={props.operation} className={props.className}>
            {props.name}
        </button>


    )
}

export default Button
