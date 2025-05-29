import { Component } from "react";
class ClassCounter extends Component {
    constructor() {
        super();
        this.state = { "counter": 0 };
    }
    updatecounter = () => {
        this.setState({ "counter": this.state.counter + 1 });
    }
    render() {
        return (
            <div>
                <h1>Counter is {this.state.counter}</h1>
                <button onClick={this.updatecounter}>Update Counter</button>
                <h1>Name is {this.props.name}</h1>
                <h2>Age is {this.props.age}</h2>
            </div>
        )
    }
}
export default ClassCounter;