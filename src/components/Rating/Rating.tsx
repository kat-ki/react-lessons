import React from "react";
type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    return (
        <div>
            <Star selected={ props.value > 0 }/>
            <Star selected={ props.value > 1 }/>
            <Star selected={ props.value > 2 }/>
            <Star selected={ props.value > 3 }/>
            <Star selected={ props.value > 4 }/>
        </div>
    )


}

type StarPropType = {
    selected: boolean
}

function Star(props: StarPropType) {
    console.log("Star rendering");
    if (props.selected === true) {
        return <span><b>Star</b></span>
    } else {
        return <span>Star</span>
    }
}