import { Component } from "react";
class ClassDemo1 extends Component{

    constructor(){
        super();
        this.state={"name":"Ronak", "age":23, "marks":78.90}
    }

    updatename=()=>{
        this.setState({"name":"Rishi", "age":20});
    }
    render(){
        return(
            <div>
                <h1>Name is {this.state.name} and age is {this.state.age}</h1>
                <h2>Marks are {this.state.marks}</h2>
                <button onClick={this.updatename}>click here to update name</button>
            </div>
        )
    }
}
export default ClassDemo1;