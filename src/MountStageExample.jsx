import React, { Component } from 'react'

export default class MountStageExample extends Component {
    constructor() {
        super();
        console.log("This is constrcitor");
        this.state = { "Counter": 0 };
    }
    updatecounter = () => {
        this.setState({ "Counter": this.state.Counter + 1 })
    }
    componentDidMount() {
        console.log("This is componenetDidMount method example....")
    }
    render() {
        console.log("This is render method");

        return (
            <div>
                <h1>this is example of mount stage</h1>
                <h1>Counter is {this.state.Counter}</h1>
                <button onClick={this.updatecounter}>update counter</button>
            </div>
        )
    }
}
