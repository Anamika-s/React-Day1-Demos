import React, { useState } from 'react'

//  managing state in function componentUpadateState

// in function components, to mamage state 
// we use hook
// useState

const State2 = () => {
const [name, setName] = useState("");
const[age,setAge] = useState(0);
const UpdateName=()=>
{
    setName("new name");

}

const UpdateAge=()=>
{
    setAge(24);
}
  return (
    <div>State2

        <h1> Your name is {name}</h1>
        <h2> Your Age is {age}</h2>

        <button onClick={UpdateName}> Update Name </button>
        <button onClick={UpdateAge}> Update Age </button>
        <button onClick={()=> setAge(27)}> Update Age </button>;
    </div>
  )
}

export default State2