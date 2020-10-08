import React from 'react'
import './button.css'

export const Button = (props) => {
    const size = props.size

    return (
        <button className={["buttonDefault", size].join(' ')} onClick={ props.onClick} >
            {props.title}
        </button>
    )
}
