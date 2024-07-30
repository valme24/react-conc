import React,{useState} from 'react';


function Todo(){
const [tasks,SetTasks] = useState([]);
const [task,setTask] = useState({title:"TITLE",
                                 description:"DESCRIPTION",
                                  date:new Date().getFullYear()});

function addTask(){
    SetTasks(c=>([...c,task]));

}
function removeTask(index){
    SetTasks(tasks.filter((task,i)=>i!==index));
}
function handleTasksChange(event){
    const temp = {title:task.title,description:task.description,date:task.date};
    task.title="";
    task.description="";
    task.date="";
}
function handleDate(event){
    setTask({...task,date:event.target.value});
    event.target.value = new Date().getFullYear();
    event.target.value=new Date().getFullYear();

}
function handleTitle(event){
    setTask({...task,title:event.target.value});
    event.target.value = "" 
}
function handleDescription(event){
    setTask({...task,description:event.target.value});
    event.target.value = "" ;
    
}


return(
    <div>
        <h1 id="heading">todo list</h1>
        
        <input type="text" value={task.title} onChange={handleTitle} 
        placeholder='enter task title' className='input'/><br></br>

        <input type="text" value={task.description} onChange={handleDescription}
         placeholder='enter task description' className='input'/><br></br>

        <input type="date" value={task.date} onChange={handleDate} 
        placeholder='enter task date'className='input'/><br></br>
        <button onClick={addTask}>Add Task</button>

        <ul> {tasks.map((tasks,index)=>
        {
            return <li key={index} onClick={()=>removeTask(index)} 
            className="task"><h3 className='task-title'>{tasks.title} </h3>
            <p className='task-description'>{tasks.description}</p>
            <p className='task-date'>{tasks.date}</p>

            </li>
        }
        )}</ul>
    </div>
)
}
export default Todo;
