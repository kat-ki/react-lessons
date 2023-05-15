import { useState } from "react";

type OnOffPropsType = {
    // on: boolean
}

export function OnOff (props: OnOffPropsType) {

    let [on, setOn] = useState (false);

    const onStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "2px solid pink",
        color: "black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        border: "2px solid pink",
        color: "black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "2px solid pink",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={ () => { setOn(true) } }>On</div>
            <div style={offStyle} onClick={ () => { setOn(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}
