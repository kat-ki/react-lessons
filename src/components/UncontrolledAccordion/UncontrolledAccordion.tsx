import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";



type AccordionPropsType = {
    titleValue: string,
    //collapsed: boolean
}
function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)} }/>

            { !collapsed && <AccordionBody title={"MenuC"}/>}
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