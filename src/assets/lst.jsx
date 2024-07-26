import React from 'react';
import PropTypes from 'prop-types';
function Lst(props){

const catagory = props.catagory;
let itemlst = props.items ;





   const frutsList = itemlst.map(item=><li key={item.d}> {item.name}: &nbsp; {item.calore}</li>);
return <>
        <h3 className='catagory'>{catagory}</h3>
        <ol className='lst' >{frutsList}</ol>
        </>;
}

Lst.defualtProps={
    catagory: "fruts",
    items: [{d:1,name:'apple',calore:67},
    {d:2,name:'banana',calore:819},
    {d:3,name:'orange',calore:910},
     {d:4,name:'grapes',calore:415},]
}

Lts.PropTypes={
catagory: PropTypes.string,
items: PropTypes.arrayOf(PropTypes.shape({d:PropTypes.number,name:PropTypes.string,calore:PropTypes.number}))
}
export default Lst;