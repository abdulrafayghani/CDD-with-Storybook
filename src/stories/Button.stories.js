import React from 'react'
import { Button } from '../components/Button'


export default {
    title: 'Button',
    component: Button
}

export function ButtonDefault() {
    return(
        <Button title='hello' />
    )
}

export function ButtonSmall() {
    return(
        <Button size='small' title='hello' />
    )
}

export function ButtonLarge() {
    return(
        <Button size='large' title='hello' />
    )
}

export function ButtonEvent() {
    return(
        <Button size='large' title='hello' onClick={()=> alert('hello')} />
    )
}