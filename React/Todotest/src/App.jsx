import { useState } from 'react'
import './App.css'

function App() {

  const [todo , settodo]=useState(" ")

   const handleAdd= ()=>{

  
   }
  





  return (
    <>
     <h1>Todo list</h1>
     <input type text/>
     <button onClick={handleAdd}>add</button>
     <button>delete</button>
    </>
  )
}

export default App
