import { Component } from "react";

export default class Child1 extends Component
{
    render(){
        return(
         <>
        <h1> I am Child1 Class Component</h1>
        <p> <b> Hello   {this.props.name} <br/>
        Your dept is {this.props.dept}  </b>     </p>
        </>
    )}
}