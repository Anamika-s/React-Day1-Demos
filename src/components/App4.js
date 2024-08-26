import { Component } from "react";


export default class App4 extends Component{
 
 constructor(props) {
    super(props);
 }
    render(){
        return (
        <><h1> App4 child class3 component </h1>
        <h2> {this.props.name} </h2>
</>
        )
    }
 }

