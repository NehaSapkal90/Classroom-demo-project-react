import { Component } from "react";
class ClassDemo extends Component {
    a = 20;
    update = () => {
        console.log("Value of a is " + this.a);
        this.a = this.a + 5;
        console.log("Value of a is "+this.a);
    }
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Welcome to class component</h1>
                <h1>Value of a is {this.a}</h1>
                <button onClick={this.update}>click update</button>
            </div>
        )
    }
}
export default ClassDemo;