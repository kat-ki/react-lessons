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
            <AccordionType title={props.titleValue} onClick={() => {setCollapsed(!collapsed)} }/>

            { !collapsed && <AccordionOffer title={"Here are our dishes"}/>}
        </>
    )
}

type AccordionTypePropsType = {
    title: string
    // collapsed: boolean
    onClick: ()=> void
}

function AccordionType(props: AccordionTypePropsType) {
    return (
        <div> {props.title}
            <div>Breakfast</div>
            <div>Brunch</div>
            <div>Lunch</div>
            <div>Dinner</div>
        </div>
    )
}
function AccordionOffer(props: any) {
    return (
        <h3 onClick={ ()=>{props.onClick()} }>{props.title}</h3>
    )
}
export default UncontrolledAccordion;