import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(){
        super();
        this.state={"counter":0}

    }
    updatecounter=()=>{
        this.setState({"counter":1})
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("This method is executed after component is in update stage");
        console.log("before update couter is "+prevState.counter);

        if(this.state.counter<10){
            this.setState({"counter":this.state.counter+1})
        }
    }
  render() {
    return (
      <div>
        <br/>
        <h1>Counter is {this.state.counter}</h1>
        <button onClick={this.updatecounter}>update couter</button>        
      </div>
    )
  }
}
