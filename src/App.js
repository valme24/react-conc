import React,{useState,useEffect,useRef} from "react";
import ComponentA from "./componenta";
function App() {
  // const [number,SetNumber] = useState(0); 
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  useEffect(()=>{
    console.log("component rendered ")},[]);
 function handleClick(){
    // SetNumber(n=>n+1);
    // console.log(number);
   inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "yellow";
    
 }
 function handleClick2(){
  // SetNumber(n=>n+1);
  // console.log(number);
 inputRef.current.focus();
 inputRef.current.style.backgroundColor = "yellow";
 inputRef2.current.style.backgroundColor = "red";
 inputRef3.current.style.backgroundColor = "yellow";
  
}
function handleClick3(){
  // SetNumber(n=>n+1);
  // console.log(number);
 inputRef.current.focus();
 inputRef.current.style.backgroundColor = "yellow";
 inputRef2.current.style.backgroundColor = "yellow";
 inputRef3.current.style.backgroundColor = "red";
  
}
  return (
  <>
  <div>
 <button onClick={handleClick}>Click</button>
 <div>{inputRef.current}</div>
 <input ref={inputRef}/>
 <hr/>

 <button onClick={handleClick2}>Click</button>
 <div>{inputRef2.current}</div>
 <input ref={inputRef2}/>
 <hr/>


 <button onClick={handleClick3}>Click</button>
 <div>{inputRef3.current}</div>
 <input ref={inputRef3}/>

 </div> 

  </>


  
  );
}
export default App;