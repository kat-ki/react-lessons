import { useState } from "react";

type UncontrolledOnOffPropsType = {
    // on: boolean
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff (props: UncontrolledOnOffPropsType) {

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

    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={ onClicked }>On</div>
            <div style={offStyle} onClick={ offClicked }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}
