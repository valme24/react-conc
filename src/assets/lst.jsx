import React from 'react';
function Lst(props){

const catagory = props.catagory;
let itemlst = props.items ;





   const frutsList = itemlst.map(item=><li key={item.d}> {item.name}: &nbsp; {item.calore}</li>);
return <>
        <h3 className='catagory'>{catagory}</h3>
        <ol className='lst' >{frutsList}</ol>
        </>;
}
export default Lst;