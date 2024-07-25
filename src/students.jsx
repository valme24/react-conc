function Student(props){
return(
    <div className="student">
<p>Student :{props.name}</p>
<p>Student age  ={props.age} </p>
<p>Student status = {props.status ? "Active" : "Inactive"}</p>
</div>
);

}
export default Student;