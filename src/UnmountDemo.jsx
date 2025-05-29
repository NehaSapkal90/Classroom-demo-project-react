import React, { Component } from 'react'

export default class UnmountDemo extends Component {

    componentWillUnmount(){
        console.log("This is componenetWillUnmount() method example.....");
    }
  render() {
    return (
      <div>
        <br/>
        
        <h1>Hello from React js</h1>
      </div>
    )
  }
}
