import { Component } from "react";
import Child1 from "./Child1";

export default class Parent1 extends Component
{
    render(){
        return(
         <>
        <h1> I am Parent Class Component</h1>
        <p> Some contents Some contentsSome 
            contentsSome 
            contentsSome contentsSome contents
        </p>
        <Child1 name="ajay" dept="Accts"/>
        </>
    )}
}