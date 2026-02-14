import React from "react";
// import useToggle from "./components/useToggle";

// function App() {
//   const [isVisible, toggleVisible] = useToggle(false);

//   return (
//     <div>
//       <button onClick={toggleVisible}>
//         Toggle
//       </button>

//       {isVisible && <p>Hello Abhishek 👋</p>}
//     </div>
//   );
// }

// export default App;
import useToggle from './components/useToggle'
function App(){
  const [showpassword, Togglepassword]=useToggle(false);
  return (
    <div>
    <input
    type={showpassword?"text":"password"}
    placeholder='enterpass'/>

    <button onClick={Togglepassword}>
      {showpassword ? "hide":"show"}
    </button>
    </div>
  )
}


export default App;


 

