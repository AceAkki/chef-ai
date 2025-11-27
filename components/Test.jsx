import {useState} from "react"
import { Count } from "./Test-Count"
//import testImg from "https://cdn.pixabay.com/photo/2021/11/03/00/56/pizza-6764430_1280.jpg";

export function Test() {
    const [result, setResult ]= useState(0);
    
  function plus () {
    //setResult(parseInt(document.getElementsByClassName("result")[0].textContent) + 1)
    //setResult(result + 1)
    setResult(preResult => preResult + 1)
  }

  function minus () {
    setResult(preResult => preResult - 1)
  }

  //let shortAns = false;

  //let answer = (shortAns) ? "yes" : "it is a markup language only"
  
  // const [answer, setAnswer] = useState("")
  // function checkAns() {
  //   shortAns = (shortAns) ? false : true;
  //   console.log(shortAns);
  //   setAnswer( ()=> {
  //     return (shortAns) ? "yes" : "it is a markup language only"
  //   })
  // }

  const [isShort, setIsShort] = useState(false);

  function checkAns () {
    setIsShort(prevAns => !prevAns)
  }

return (
    <section>
         <Count
            num={result}
         />
        <div>
         <button className="minus" onClick={minus}>minus</button>
         <button className="plus" onClick={plus}>plus</button>
        </div>

        <section>
          <h2>HTML is Markup Language not a Programming Language</h2>
          {/* {(shortAns) ? <h5>yes</h5> :<h1>it is a markup language only</h1> } */}
          {/* <h4>{(shortAns) ? "yes" : "it is a markup language only"}</h4> */}

          {/* <h4>{answer}</h4>
          <button onClick={checkAns}>Check Answer</button> */}

          <h4>{(isShort) ? "yes" : "it is a markup language only"}</h4>
          <button onClick={checkAns}
            aria-label={`current answer is ${(isShort) ? "yes" : "it is a markup language only"} click to change`}
          >Check Answer</button>
        </section>
    </section>
)

}

/*
2 options for state setter
new version of state that can directly replace old version of state 
callback function that must return new value of state to be, it will receive old verstion of state as parameter which we can use to set
new value

when we dont need old value and just want to replace - one option

when new value is based on the old value - option two 



*/