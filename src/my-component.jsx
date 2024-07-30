import React,{useState} from 'react';
function MyComponent(){
   const [fruit,setFruit]=useState(["banaana","appale","orange"])
   
   function handleAddFruite(){
    const temp = document.getElementById("food-input").value;
    console.log("fruite is added successfully");
    document.getElementById("food-input").value =" ";
    setFruit(f=>([...f,temp]));

   }
   function handleRemoveFruite(index){
    setFruit(fruit.filter((_,i)=>i!==index));


   }
    return (
        <div>
           <h1> lis of fruits</h1>
           <ul>
                {fruit.map((fruit,index)=>(
                     <li key={index} onClick={ ()=>handleRemoveFruite(index)}>{fruit}</li>
                ))};
           </ul>
           <input id="food-input" type="text" placeholder="add a fruit"/>
           <button onClick={handleAddFruite}>add</button>
           
           <button onClick={handleRemoveFruite}>remove</button>
        </div>
    )

}
export default MyComponent;