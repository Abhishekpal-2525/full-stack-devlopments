import { useState } from 'react'

import './App.css'

function App() {

  let [count, setCount] = useState(15)

  const addvalue=()=>{

     setCount(count + 1)
  }

  const canclevalue=()=>{
    setCount(count - 1 )
  } 

  return (
    <>
    <h1>counter</h1>
    <h2>Counter value {count} </h2>
    <button onClick={addvalue}>Add value</button>
    <button onClick={canclevalue}>Cancle value</button>
    </>
  )
}

export default App
