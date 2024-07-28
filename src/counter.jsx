import React,{useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div className='counter-container'>
            <p className='counter-value'>{count}</p>
            <button onClick={increment} className='counter-button'>Increment</button>
            <button onClick={reset} className='reset-button'>Reset</button>
            <button onClick={decrement} className="counter-button">Decrement</button>
        </div>
    )
}
export default Counter;