function Lst(){
const fruts = [{d:1,name:'apple',calore:67},
               {d:2,name:'banana',calore:819},
               {d:3,name:'orange',calore:910},
                {d:4,name:'grapes',calore:415},];
fruts.sort((a,b)=>a.name.localeCompare(b.name));
fruts.sort((a,b)=>b.name.localeCompare(a.name));
fruts.sort((a,b)=>a.calore-b.calore);
const locofru = fruts.filter(fruts => fruts.calore<100);
let frutsList = fruts.map(fruts=><li key={fruts.name}> {fruts.name}: &nbsp; {fruts.calore}</li>);
   frutsList = locofru.map(locofru=><li key={locofru.name}> {locofru.name}: &nbsp; {locofru.calore}</li>);
return <ol>{frutsList}</ol>;
}
export default Lst;