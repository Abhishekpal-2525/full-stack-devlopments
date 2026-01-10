import { useState } from "react"


function App() {
  let [Color, setColor]=useState('olive')

  return (
   <div className= "w-full h-screen duration-200 "
       style={{backgroundColor:Color}}
   > 
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"  >
          <button 
            onClick={() => setColor("blue")} 
            className=" outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor:"blue" }}
           >blue</button>
             <button className=" outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor:"red" }}
           >red</button>
             <button className=" outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor:"black" }}
           >black</button>
             <button className=" outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor:"pink" }}
           >pink</button>
             <button className=" outline-none px-4 py-1 rounded-full text-white"
            style={{backgroundColor:"red" }}
           >red</button> 
       </div>
     </div>
   </div>
  )
}

export default App
 