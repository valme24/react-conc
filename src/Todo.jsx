import React,{useState} from 'react';


function Todo(){
const [tasks,SetTasks] = useState([]);
const [task,setTask] = useState({title:"",
                                 description:"",
                                  date:new Date().getFullYear()});
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [date,setDate] = useState(new Date());
function addTask(){
    if (title !== "" && description !== "" && date !== "") {
        const newTask = { title, description, date };
        setTask(newTask);
        
        SetTasks(c => [...c, newTask]);
        setTask({})
        setTitle("");
        setDescription("");
        setDate(new Date());
      }

}
function removeTask(index){
    SetTasks(tasks.filter((task,i)=>i!==index));
}

function handleDate(event){
    setDate(event.target.value);
  
  // event.target.value=new Date();

}
function handleTitle(event){
    setTitle(event.target.value);
  //  event.target.value = "" ;
}
function handleDescription(event){
    setDescription(event.target.value);
   // event.target.value = "" ;
    
}


return(
    <div>
        <h1 id="heading">todo list</h1>
        
        <input type="text" value={title} onChange={handleTitle} 
        placeholder='enter task title' className='input'/><br></br>

        <input type="text" value={description} onChange={handleDescription}
         placeholder='enter task description' className='input'/><br></br>

        <input type="date" value={date} onChange={handleDate} 
        placeholder='enter task date'className='input'/><br></br>
        <button onClick={addTask}>Add Task</button>

        <ul> {tasks.map((taske,index)=>
        {
            return <li key={index} onClick={()=>removeTask(index)} 
            className="task"><h3 className='task-title'>{taske.title} </h3>
            <p className='task-description'>{taske.description}</p>
            <p className='task-date'>{taske.date}</p>

            </li>
        }
        )}</ul>
    </div>
)
}
export default Todo;
