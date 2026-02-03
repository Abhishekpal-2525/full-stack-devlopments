import React from 'react'
import {useState} from "react";

function App(){
    const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name is: {name}</p>
    </>
  );
}

export default App