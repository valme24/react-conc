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
  return (
   <>
  <Lst items={fruts} catagory="fruts"> </Lst>
  <Lst items={veg} catagory="vegetables"> </Lst>
  
  </>
  );
}
export default App;