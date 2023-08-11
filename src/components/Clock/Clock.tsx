import React, {useEffect, useState} from 'react';

type PropsType = {}

const getTimeAs2DigitsString = (number: number) => number < 10 ? '0' + number : number;
const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <span>Local Time: {getTimeAs2DigitsString(date.getHours())}</span>
            :
            <span>{getTimeAs2DigitsString(date.getMinutes())}</span>
            :
            <span>{getTimeAs2DigitsString(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;
