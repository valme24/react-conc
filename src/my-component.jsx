import React,{useState,useEffect} from 'react';

function MyComponent(){
const [count,setcount]=useState(0);
const [color,setColor]=useState('red');

//useEffect(funtion,array of dependencies);
useEffect(()=>{
   document.title=`count:${count} ${color}`;
},[count,color]);
const addCount=()=>{
    setcount(c=>c+1);
}
const minuscount=()=>{
setcount(c=>c-1);
}
function changeColor(){
    if(color==='red'){
        setColor('green');
    }else{
        setColor('red');
    }
}

    return (
        <div>
         <p style={{color:color}}>count :{count}</p>
          <button onClick={addCount}>Increment</button>
          <button onClick={minuscount}>decrement</button>
          <button onClick={changeColor}>change color</button>
        </div>
    )

}
export default MyComponent;