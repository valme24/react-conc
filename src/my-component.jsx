import React,{useState} from 'react';
function MyComponent(){
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:2024
    });
     function handleYear(event){
             setCar({...car,year:event.target.value});
        
    }
    function handleBrand(event){
             setCar({...car,brand:event.target.value});
        
    }
    function handleModle(event){
             
        setCar({...car,model:event.target.value});

    }
    return (
        <div>
            <p> your favariote car is {car.brand} {car.model} {car.year}
            </p>
            <input type='number' value={car.year} onChange={handleYear} ></input><br/>
            <input type='text' value={car.brand} onChange={handleBrand}></input><br/>

            <input type='text' value={car.model} onChange={handleModle}></input><br/>
        </div>
    )

}
export default MyComponent;