

import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
const [stateCount, setStateCount] = useState(0);

const refCount = useRef(0);

useEffect(() => {
console.log("render...")
});
const incrementStateCount = () => {
setStateCount(stateCount + 1);

console.log("state.......")
}

const incrementRefCount = () => {
  refCount.current += 1;
  console.log("reffff..")
}


  
return (
    <div>
       <div>WelCome</div>
    <p>State Count : {stateCount} </p>
    <button onClick={incrementStateCount}>incrementStateCount</button>


    <p>Ref Count : {refCount.current}</p>
    <button onClick={incrementRefCount}>incrementRefCount</button>
    </div>
  )
}


export default App
