import React,{useState} from 'react';
function MyComponent() {
    let [name, setname] = useState("guest");
    let [age, setage] = useState(0);
    let [isEmployee, setisEmployee] = useState(false);
    const updateName = () => {
        setname("spongebob");
        console.log("function called");
    }
    const updateage = () => {
        setage(age+1);
        console.log("age incremented successfully");
    }
    const updateisEmployee = (e) => {
        setisEmployee(!isEmployee);
        if(isEmployee)
            e.target.innerHTML="hire";
        else 
            e.target.innerHTML="fire";
        
        
        
    }

    return (
       <>
        <div>
            <h1>name:{name}</h1>
            <button onClick={()=>updateName()}>set name</button>
        </div>
        <div>
            <h1>age:{age}</h1>
            <button onClick={()=>updateage()}>increment age</button>
        </div>
        <div>
            <h1>is isEmployee :{isEmployee?"yes":"no"} </h1>
            <button onClick={(e)=>updateisEmployee(e)}>hire</button>
        </div>
       </>
    )
}
export default MyComponent;