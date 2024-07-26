import Lst from './assets/lst';
import React from 'react';
function App() {
  const fruts = [{d:1,name:'apple',calore:67},
               {d:2,name:'banana',calore:819},
               {d:3,name:'orange',calore:910},
                {d:4,name:'grapes',calore:415},]
const veg = [{d:1,name:'potato',calore:67},
                {d:2,name:'banana',calore:819},
                {d:3,name:'ono',calore:910},
                 {d:4,name:'tomato',calore:415},];
const fruts1 = [{d:1,name:'potato',calore:67}];
  return (
   <>
   {fruts.length > 0 ?
  <Lst items={fruts} catagory="fruts"> </Lst>:null};
  {fruts1.length > 0 ?
  <Lst items={fruts1} catagory="fruts1"> </Lst>:null};
  <Lst items={veg} catagory="vegetables"> </Lst>
  
  </>
  );
}
export default App;