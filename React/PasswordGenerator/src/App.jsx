import {useState}from'react'
import './App.css'

function App() {

  const[length , setLength]= useState(8)
  const[numberAllowed, setNumberAllowed]= useState(false);
  const[charAllowed, setCharAllowed]= useState(false);
  const[password, setPassword]= useState('')

  const passwordGenerator = useCallback(()=>{
  });

  return (
    <>
     <h1 className='text-center text-3xl text-white' > Password generator</h1>
     
    </>
  )
}

export default App
