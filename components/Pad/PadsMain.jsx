import React from "react"
import pads from "../../src/colorpads"
import { Pad } from "./Pad"

export function PadsMain(props){
    const [padsArr, setPadsArr] = React.useState(pads);
    console.log(props.darkmode)
    // let btnStyle = {
    //     backgroundColor: (pads.length % 2 === 0) ? "blue" : "green"
    // }

    function handleClick(id) {
        // console.log("click", id)
        setPadsArr(prevPads =>
        prevPads.map(pad => {
            // console.log(pad.id === id)
            return (pad.id === id)? { ...pad, on:!pad.on}: pad 
        })
         )
    //    setPadsArr(prevPads => prevPads.map(pad => ({...pad, on:!pad.on})))
    }

    function turnAllOff () {
       setPadsArr(prevPads => prevPads.map(pad => ({...pad, on:false})))
    }
    
    let btnArr = padsArr.map(pad => <Pad key={pad.id} data={pad} func={handleClick}/> )



    return (
        <main style={(props.darkmode) ? {backgroundColor:"#222222"} : {backgroundColor:"#cccccc"} }>
            <div className="pads-container">
                {btnArr}
            </div>
            <button onClick={turnAllOff}>Turn Off</button>
        </main>
    )
}