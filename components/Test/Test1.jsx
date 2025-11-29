import { useState } from "react"

export function Test1 (){
    const [want, setWant] = useState(true)

    function changeLang () {
        setWant(prev => !prev)
    }

    return (

        <section>
            <div>
                Do you want tea ?
            </div>
            <h2>{want ? "yes" : "si"}
            </h2>
            <button onClick={changeLang}>
                Change Answer
            </button>
        </section>
    )
}
