import { Component } from "react";
class ClassState extends Component {
    
    constructor() {
       
        super();
        this.state={"name":"Meena"};
         
    }
  
    render() {
        return (
            
            <div>
                <h1>Name of student is {this.state.name}</h1>
               
            </div>
        )
    }
}
export default ClassState;