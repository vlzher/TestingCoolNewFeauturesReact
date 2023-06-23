import React, {useState} from 'react';
import classes from "./Counter.module.scss"
const Counter = () => {
    const [number,setNumber] = useState(0)
    const increment = () => (setNumber(number+1))
    return (
        <div>
            <div className={classes.number}>{number}</div>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;