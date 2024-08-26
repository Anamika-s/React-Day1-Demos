import React, { Component } from 'react'


// state is use to give some initial value
// it can be modified also

// this.setState is used to update state
export default class State1 extends Component {
    state=
    {
         name:"ajay",
         age : 24
    };
    UpadateState =()=>
    {
        this.setState({name:"Deepak"});
        this.setState({age: 25});
    }
  render() {
    return (
      <div>State1
        <h1> 
            Name is {this.state.name}
            <br/>
            Age is {this.state.age}
        </h1>
        <button onClick={this.UpadateState}> Update State </button>
        <button onClick={()=> this.setState({age:30})}> Update State </button>
     
     
      </div>
    )
  }
}
