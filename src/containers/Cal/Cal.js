import React, { Component } from 'react'
import Keys from '../../UI/Keys/Keys'
import classes from './Cal.module.css'


class Calculator extends Component {
    state = {
        arg1 : 0,
        activeArg: 0,
        operation : ''
    }
    // componentDidMount(){
    //     this.refMain.focus()
    // }
    componentDidUpdate() {
        this.refMain.focus()
    }
    inputHandler = (event)=>{
        const val = event.target.value
        switch(true) {
            case (/\+|-|\/|\*|%$/).test(val) :
                if(this.state.operation!==''){
                    this.setState({operation : val.substr(val.length-1,1)})
                    this.calculate()
                }else{
                    this.setState({
                        arg1: +val.substr(0,val.length-1),
                        activeArg: 0,
                        operation : val.substr(val.length-1,1),
                    })
                }
                break;
            case (/^[0-9]*$/).test(val) :
                this.setState({activeArg : +val})
                break;
            case val.substr(val.length-1,1)==='=' :
                    this.setState({operation : '='})
                    this.calculate()
                    break;
            default :
                break;
        }
    }
    calculate = ()=>{
        let result
        switch(this.state.operation) {
            case '/':
                result  = this.state.arg1 / this.state.activeArg
                break
            case '+':
                result = this.state.arg1 + this.state.activeArg
                break
            case '-':
                result = this.state.arg1 - this.state.activeArg
                break
            case '*':
                result = this.state.arg1 * this.state.activeArg
                break
            case '%':
                result = this.state.arg1 % this.state.activeArg
                break
            default:
                result = this.state.arg1
                break
        }
        this.setState({
            arg1: result,
            activeArg: 0
        })
    }

    keyPressHandler = (event)=>{
        const val = event.target.value
        if(true){
            this.setState(pervState=>({activeArg:pervState.activeArg*10+parseInt(val)}))
        }
    }
    render(){
        return(
            <div className = {classes.Calculator}>
                <form >
                    <div style={{display:"inline"}}>
                        <input className={classes.Arg1} type="text" value ={this.state.arg1} disabled/>
                        <input className={classes.Op} type="text" value ={this.state.operation} disabled/>
                    </div>
                    <input ref={input=>{this.refMain = input}} autoFocus className={classes.Input} type="text" value ={this.state.activeArg} onChange ={this.inputHandler}/>
                    <hr/>
                    <Keys onClick = {(event)=>this.keyPressHandler(event)}/>
                </form>
                <button onClick={()=>this.setState({arg1:0,activeArg:0,operation:''})}>C</button>
            </div>
        )
    }
}

export default Calculator