import { useState,useEffect } from 'react'
function App() {
  const [count, setCount] = useState([])

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((data)=>{
        setCount(data);
      });
   },[]);

  return (
    <>
     <h1>MY DATA ID FETCH </h1>
     
  
    </>
  )
}

export default App
