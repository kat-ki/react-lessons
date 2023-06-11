import React, { useReducer, useState } from "react";
import Accordion from "../Accordion/Accordion";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";



type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

   // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, { collapsed: false });

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED}) }}/>

            { !state.collapsed && <AccordionBody title={"MenuC"}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    // collapsed: boolean
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ ()=>{props.onClick()} }> --{props.title} --</h3>
    )
}
function AccordionBody(props: any) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}
export default UncontrolledAccordion;