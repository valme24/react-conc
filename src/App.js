import UserGreetng from "./assets/userGreetng";
import Student  from "./students";
import PropTypes from 'prop-types';
function App() {
  return (
   <>
  <UserGreetng name="John" age={25} status={true}/>
  <UserGreetng name="John1" age={25} status={false}/>
  <UserGreetng name="John2" age={25} status={true}/>
   <UserGreetng></UserGreetng>
   <UserGreetng></UserGreetng>
   <UserGreetng></UserGreetng>
   </>
    
  );
}
Student.PropTypes={
  name: PropTypes.string,
  age: PropTypes.number,
  status: PropTypes.bool
}

Student.defaultProps={
  name: "Unknown",
  age: 0,
  status: false
}
export default App;
