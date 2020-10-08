import React from 'react'
import { Counter } from "../components/Counter";
import { withKnobs, number } from "@storybook/addon-knobs";


export default { 
    title: "Counter",
    component: Counter,
    decorator: [withKnobs]
}

export function CounterDefault() {
    return(
        <Counter />
    )
}

export function CounterValue() {
    return(
        <Counter initialValue={number('initialValue', 34)} />
    )
}

export function CounterColor() {
    return(
        <Counter backgroundColor='red' />
    )
}