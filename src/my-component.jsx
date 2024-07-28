import React,{useState} from 'react';
function MyComponent() {
    let [name, setname] = useState();
    const updateName = () => {
        setname("spongebob");
        console.log("function called");
    }
    return (
        <div>
            <h1>name:{name}</h1>
            <button onClick={()=>updateName()}>set name</button>
        </div>
    )
}
export default MyComponent;