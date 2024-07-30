import React,{useState} from 'react';
function MyComponent(){
const [cars, setCars] = useState([]);
const [year,setYear] = useState(new Date().getFullYear());
const [cmake,setSmake] = useState("");
const [model,setModel] = useState("");
function addCar(){
  const newcar = {year:year,make:cmake,model:model}
   setCars(c =>([...c,newcar]));
}
function removecar(index){
    setCars(cars.filter((car,i)=>i!==index));
}
// function removecar(index){  
  
// }
function handleyear(event){
  setYear(event.target.value);  
  event.target.value = new Date().getFullYear();
}
function handleMake(event){
  setSmake(event.target.value);
  event.target.value="";
}
function handleModel(event){
  setModel(event.target.value);
  event.target.value="";
  
}

    return (
        <div>
          <h2>
            list of cars 

          </h2>
          <ul>
            {cars.map((car,index)=>{
              return <li key={index}>{car.year} {car.make} {car.model} <button onClick={()=>removecar(index)}>remove</button></li>
            })}
      
          </ul>
          <input type="number" value={year} onChange={handleyear} placeholder='eneter year of make'/><br></br>
          <input type="text" value={cmake} onChange={handleMake}  placeholder='eneter car manufactureer'/> <br />
          <input type="text" value={model} onChange={handleModel}  placeholder='enter model name '/><br />
          <button onClick={addCar}>add car</button>
        </div>
    )

}
export default MyComponent;