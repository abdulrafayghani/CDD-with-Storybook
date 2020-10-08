import React, { useState } from 'react'
import { Button } from './Button'

export const Counter = (props) => {
    const [value, setValue] = useState(props.initialValue)

    return (
        <div style={{backgroundColor: props.backgroundColor}}>
            Hello {props.initialValue}
            <br />
            Counter: {value}
            <br/>
            <Button title='Increment' size='small' onClick={()=>setValue(value+1)} />
            <Button title='Increment' size='small' onClick={()=>setValue(value-1)} />

        </div>
    )
}
