function Butto(){
   /* let count =0;
     const handleClick1 = () => {
        count++;
        if(count<3)
        console.log('button clicked ' + count + ' times');
    else
        console.log('bro stop clicking me ');};    */
    const handleClick1 = (e) => {
        console.log(e);
        e.target.textContent = 'oouch';
        
    }
     return(<button onClick={(e) => handleClick1(e)}> press me </button>);
 }
 export default Butto;
