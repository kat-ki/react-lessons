import React, {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

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

    let clockView;
    switch (props.mode) {
        case 'analog':
            clockView = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            clockView = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {clockView}
        </div>
    );
};

export default Clock;


export type ClockViewPropsType = {
    date: Date
}


