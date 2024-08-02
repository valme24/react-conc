import React,{useRef,useState,useEffect} from "react";

function StopWatch(){

   const [isRunning,setIsRunning] = useState(false);
    const [time,setTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef();




    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setTime(Date.now()-startTimeRef.current);
            },10);}
       
        return ()=>clearInterval(intervalRef.current);
    },[isRunning]);


    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now()-time;



    }
   function stop(){
         setIsRunning(false);
         




   }
   function reset(){

    setTime(0);
    setIsRunning(false);


   }
   function formatTime(){
    let ttime=Math.floor(time/1000);

    let hours = Math.floor(ttime/(60*60));
    let minutes = Math.floor((ttime/(60))%60);
    let seconds = Math.floor((time/1000)%60);

    return `${hours.toString().padStart(2,"0")} : ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
   }






    return(<div className="stopWatch">

        <div className="time">{formatTime()}</div>
        <div className="controlls">
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>


    </div>);

}

export default StopWatch;