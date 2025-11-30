import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'        

function App() {
  const ValueRef = React.useRef(null);
  const [Text, setText] = React.useState(null);



  const handleFunctions = () =>{
    let value = ValueRef.current.value;
    setText(value);
    ValueRef.current.value = null;
  }
  console.log(Text);
  

  return (
    <>
      <h1> useRef hook</h1>
      <h3>text: {Text}</h3>

      {/* <input type='text' ref={ValueRef} onKeyDown={(event)} => event.key === 'Enter' ? handleFunctions() : null} /> */}
    </>
  )
}

export default App
