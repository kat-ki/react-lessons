import { useState } from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff (props: OnOffPropsType) {

    const onStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "2px solid pink",
        color: "black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: props.on ? "green" : "white"
    }

    const offStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "2px solid pink",
        color: "black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: props.on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "2px solid pink",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={ () => { props.onChange(true) } }>On</div>
            <div style={offStyle} onClick={ () => { props.onChange(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}
