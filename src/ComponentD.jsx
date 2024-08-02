import React,{useContext} from "react";
import { UserContext } from "./componenta";

function ComponentD(){
    const user = useContext(UserContext);
    return(
        <div className="box">
            
            <h1>Component D</h1>
            <h2>helo {user}</h2>
        </div>
    )
}

export default ComponentD;

