import React, { useState } from 'react';
import Accordion from './components/Accordion/Accordion';
import { Rating, RatingValue } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { UncontrolledOnOff } from "./UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValue>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState (false);
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
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
            {/*<OnOff on={on} onChange={ setOn } />*/}
            <Accordion titleValue={"Menu_Contr"}
                       collapsed={accordionCollapsed}
                       onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledAccordion titleValue={"Menu_Uncontr"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
