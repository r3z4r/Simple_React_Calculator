import React from 'react' 
import classes from './Keys.module.css'
import Key from './Key/Key'

export default function Keys(props) {
    const keys = []
    for(let i=1;i<10;i++){
        keys.push(<Key onPress={props.onClick} isNumber key={i} val={i}/>)
    }
    return (
        <div className={classes.Keyboard}>
            <div className={classes.Numbers}>
                {keys}
                <Key isNumber
                        onPress={props.onClick}
                        val = '0'/>
            </div>
            <div className={classes.Opertions}>
                <Key isNumber={false}
                        onPress={props.onReset}
                        val = 'C'/>
                <Key isNumber={false}
                        onPress={props.onClick}
                        val = '+'/>
                <Key isNumber={false}
                        onPress={props.onClick}
                        val = '-'/>
                <Key isNumber={false}
                        onPress={props.onClick}
                        val = '/'/>
                <Key isNumber={false}
                        onPress={props.onClick}
                        val = 'x'/>
            </div>
        </div>
    )
}