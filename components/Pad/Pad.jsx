import React from "react"
export function Pad (props) {
    // const [state, setState] = React.useState(props.data.on);
    // function changeState () {
    //     console.log("click",state)
    //     setState(prev => {
    //        return  !prev
    //     })
    // }

    let padData = props.data;
    let btnStyle = {
        backgroundColor : padData.color
    }
    return (
        <button style={btnStyle} className={(padData.on) ? "on" : null} onClick={() => props.func(padData.id)}>{padData.color}</button>
    )
}