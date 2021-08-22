import React from 'react'

const Input = props => {
    return (
        <>
            <input type="text" value={props.value} readOnly />
        </>
    )
}

export default Input
