import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const getTimeAs2DigitsString = (number: number) => number < 10 ? '0' + number : number;
    return (
        <>
            <span>Local Time: {getTimeAs2DigitsString(date.getHours())}</span>
            :
            <span>{getTimeAs2DigitsString(date.getMinutes())}</span>
            :
            <span>{getTimeAs2DigitsString(date.getSeconds())}</span>
        </>
    )
}