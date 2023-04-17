import React from 'react';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className={"App"}>
            {/*<Page title={"Menu"}/>
            <Page title={"Menu2"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
            {/*<OnOff />*/}
            <OnOff />
            <Accordion titleValue={"Users"} collapsed={false}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Rating value={1}/>
            <UncontrolledRating />
        </div>
    );
}


type PagePropsType = {
    title: string
}
function Page(props: PagePropsType) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}




export default App;
