import React, { useState } from 'react';

const generateData = () => { // synchronous; complicated counting
    return 3;
}

// we can pass a function (its returned result) as an initial value to useState (complicated counting etc)
const  UseStateExample= () => {
    const [counter, setCounter] = useState(generateData);

    const changeState = (state: number) => {
        return state + 1;
    }
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={()=> setCounter(changeState)}>+ func passed</button> {/*// we can pass another function*/}
            <button onClick={()=> setCounter(state => state + 1)}>+ func body passed</button> {/*// we can pass function body as well*/}
        </div>
    );
};

export default UseStateExample;