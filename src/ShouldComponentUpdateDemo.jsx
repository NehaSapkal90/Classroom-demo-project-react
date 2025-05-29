import React, { Component } from 'react'

export default class ShouldComponentUpdateDemo extends Component {
    constructor() {
        super();
        this.state = { "Counter": 0 };
    }


    updatecounter = () => {
        this.setState({ "Counter": this.state.Counter + 1 });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("This is example of shouldcomponentUpdate()......")
        console.log("Updated counter is " + nextState.Counter);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Before update counter is "+prevState.Counter);
    }


    render() {
        return (
            <div>

                <h1>Counter is {this.state.Counter}</h1>
                <button onClick={this.updatecounter}>update Counter</button>

            </div>
        )

    }
}
