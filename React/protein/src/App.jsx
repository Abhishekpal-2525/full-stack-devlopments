// import { useState,useEffect} from 'react'

// function App() {
//   const [count, setCount] = useState([])
    
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(data=>setCount(data));

//   },[])

//   return (
//     <>
//        {users.map(user=>(
//      <h3>key={user.id} {user.name} </h3>
//         ))}
      
//     </>
//   )
// }

// export default App;
import React, { useEffect, useState } from "react";

function App(){

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));

  },[]);

  // {the file are fetch}

  return(
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default App;