import React,{useState} from "react";
function ColorPicker(){
const [color,setcolor]=useState("#000000");
function handleColorChange(event){
    setcolor(event.target.value);
}
return(
<div className="color-picker-container">
    <h1 >color picker </h1>
    <div className="color-display" style=
    {{backgroundColor:color}}>
        <p>{color}</p>

    </div>
    <label>pick a color</label>
    <input type="color" value={color} onChange={handleColorChange} id="color-input"/>

</div>
);
}
export default ColorPicker;