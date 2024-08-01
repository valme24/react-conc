import React,{useState,useEffect} from 'react';
function Clock(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const intervalid=setInterval(()=>{
            setTime(new Date());
            
        },1000);
        return ()=>clearInterval(intervalid);
    },[]);



    function formatTime(){
        let houres = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = houres >= 12 ? 'PM' : 'AM';
        houres = houres % 12 || 12;
     //   console.log(`${padzero(houres)}:${padzero(minutes)}:${padzero(seconds)} ${meridian}`);
        return `${padzero(houres)}:${padzero(minutes)}:${padzero(seconds)} ${meridian}`;
    }
    function padzero(num){
        return num<10?`0${num}`:num;
    }
    return (
        <div className='clock-container'>
       
        <div className='clock'>
        <h1>{new Date().getDate()}/{new Date().getUTCMonth()}/{new Date().getUTCFullYear()} </h1>
        <span>{formatTime()}</span>
        </div>
        </div>
    );
}
export default Clock;;