const Child2=(props)=>
{
    return(
        <>
        <h1> Child component</h1>
        <b> Name is {props.name} <br/>
        Dept is {props.dept}<br/>
        Salary is {props.salary} </b>
        </>
    )
}

export default Child2;