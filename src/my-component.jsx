import React,{useState} from 'react';
function MyComponent() {
    const [name,Setname]=useState("guest");
    const [quantity,setquantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment,setpayment]=useState("");
    const [shipping,setshipping]=useState("delivery");

    function handleChange(event){
        Setname(event.target.value);
    }
    function handleQunatityChange(event){
        setquantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlepaymentchange(event){
        setpayment(event.target.value);
    }   
    function handleshippingchange(event){
        setshipping(event.target.value);
    }
    return (
       <>
<div>
    <h1>{name}</h1>
    <input value={name} onChange={handleChange} type="text"/>
    <h1>{quantity}</h1>
    <input value={quantity} onChange={handleQunatityChange} type="number"/>
    <h3>delivery instructions</h3>
    <input value={comment} onChange={handleCommentChange} type="text" placeholder='enter delivery instruction '/>
    <p>{comment}</p>
    <h3>payment methode selected :{payment} </h3>
    <select value={payment} onChange={handlepaymentchange}>
        <option value="cash">Cash</option>
        <option value="credit card">credit card</option>
        <option value="debit card">debit card</option>
        <option value="upi">upi</option>
        </select>
        <h3>shipping methode {shipping}</h3>
        <label>
            <input type="radio" value="pick up" checked={shipping==="pick up"} onChange={handleshippingchange}/>
             pick up
        </label>
        <br/>
        <label >
            <input type="radio" value="delivery" checked={shipping==="delivery"} onChange={handleshippingchange}/>
            delivery
        </label>
        
               </div>
       </>
    )
}
export default MyComponent;