import Student  from "./students";
import PropTypes from 'prop-types';
function App() {
  return (
   <>
   <Student name="Spongeboob" age={30} status={true} > </Student>
   <Student name="patrc" age={45} status={true} ></Student>
  <Student></Student>
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
