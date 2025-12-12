import { useState , useEffect } from 'react'
import './App.css'

function App() {
 const [Cards, setCards]=useState([])

  const FetchData= async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data) 
     console.log(data);
  }

  useEffect(()=>{
    FetchData()
  },[])

  return (
    <>
<div className='container'>
  {Cards.map((cards)=>{
   return  <div className='cards'>
    <h1>{cards.title}</h1>
    <p>{cards.body}</p>
    </div>
  })}

  </div>
    </>
  )
}

export default App
