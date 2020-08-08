import React from 'react'
import classes from './Key.module.css'


export default function Key(props){
    console.log(typeof props.isNumber)
    return(<input type = 'button' 
        value={props.val} 
        className={props.isNumber?classes.Number:classes.Operator}
        onClick = {props.onPress}
    />)
}