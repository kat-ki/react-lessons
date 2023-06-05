import React from "react";
type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: Array<ItemsType>
    onClick: (value: any) => void
}
function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            { !props.collapsed === false && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}> ---{props.title}--- </h3>
    )
}

export type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            { props.items.map((i, index) => <li onClick={ ()=>{props.onClick(i.value)} } key={index}>{i.title}</li>) }
        </ul>
    )
}
export default Accordion;