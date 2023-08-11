import React, { useEffect, useState } from "react";

export const UseEffectExample = () => {
    const [counter, setCounter] = useState(0);

    // useEffect: for side effects such as
    // - fetching data,
    // - working with databases,
    // - referring (making changes) to documents,
    // - updating the DOM,
    // - setting time intervals

    //  the component is rendered completely first, useEffect is rendered in the end
    // accepts a function and optional dependency [] as arguments

    useEffect(() => {
        document.title = counter.toString(); // without a dependency useEffect will be rendered every time
    })

    useEffect(() => {
        document.title = counter.toString(); // with an empty [] dependency useEffect will be rendered only with the first render (componentDidMount)
    }, [])


    useEffect(() => {
        document.title = counter.toString(); // with this [counter] dependency useEffect will be rendered with the first render and with every counter change
    }, [counter])


    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};


export const SetTimeout = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1);
        }, 2000);

    }, [])

    return (
        <div>
            <h3>Counter-setTimeout: {counter}</h3>
        </div>
    );
};

export const GetRealTime = () => {
    const [today, setToday] = useState(new Date());

    useEffect(() => {

        const intervalID = setInterval(() => {
            setToday(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }

    }, [])

    return (
        <div>
            <p>Date: {today.toLocaleDateString()}</p>
            <p>Time: {today.toLocaleTimeString()}</p>
        </div>
    );
};