import React, {useEffect, useState} from "react";

export const UseEffectExample = () => {
    const [counter, setCounter] = useState(0);

    // useEffect: for side effects such as
    // - fetching data,
    // - working with databases,
    // - referring (making changes) to documents,
    // - updating the DOM,
    // - setting time intervals

    //  the component is rendered completely first, useEffect is rendered in the end
    // takes a function and optional dependency [] as arguments

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
export const SetInterval = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCounter(state => state + 1);
        }, 2000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h3>Counter-setInterval: {counter}</h3>
        </div>
    );
};
export const SetTimeout = () => {
    const [counter, setCounter] = useState('');

    useEffect(() => {

        const timeout = setTimeout(() => {
            setCounter('3 sec passed');
        }, 3000);

        return () => {
            clearTimeout(timeout)
        }

    }, [counter])

    return (
        <div>
            <h3>Timer: {counter}</h3>
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

export const ResetEffect = () => {
    const [counter, setCounter] = useState(1);
    console.log('component rendered')

    useEffect(() => {
        console.log('effect occurred ' + counter)

        return () => {
            console.log('reset')
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={increase}>+</button>
        </div>
    );
};
export const KeyTracker = () => {
    const [text, setText] = useState('');
    console.log('component rendered with ' + text)

    useEffect(() => {
        const trackHandler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', trackHandler)

        return () => {
            //cleanup when component not used (similar to 'component will unmount')
            window.removeEventListener('keypress',
                trackHandler)
        }
    }, [text]);

    return (
        <div>
            <h3>Entered: {text}</h3>
        </div>
    );
};