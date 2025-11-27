import { useState } from "react"

export function Test2 () {
    const [array, setArray] = useState([]);
    
    const mainArray = ["MT", "JK", "AP", "NR", "FB"]
    let elemArray = array.map(elem => <li key={elem}>{elem}</li>)

    function updateList() {
        setArray(oldArray =>  [...oldArray, mainArray[oldArray.length]])
    }
    return (
        <section>
            <ul>
                {elemArray}
            </ul>
            <button onClick={updateList}>
                Update
            </button>
        </section>
    )
}