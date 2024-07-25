import propTypes from 'prop-types';
function UserGreetng(props){
    const greets = <h1 className="greet">Hello, {props.name}! You are {props.age} years old.</h1>;
    const alert = <h1 className="alert">not logged n n</h1>;
    if(props.status){
        return greets ;
    }else 
        return alert ;
}
UserGreetng.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    status: propTypes.bool
}
UserGreetng.defaultProps={
    name: "guest",
    age: 18,
    status: true
}
export default UserGreetng;