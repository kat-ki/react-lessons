import React from "react";


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionType title={props.titleValue}/>
            { !props.collapsed === false && <AccordionOffer title={"Here are our dishes"}/>}
        </>
    )
}

type AccordionTypePropsType = {
    title: string
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
        <h3>{props.title}</h3>
    )
}
export default Accordion;