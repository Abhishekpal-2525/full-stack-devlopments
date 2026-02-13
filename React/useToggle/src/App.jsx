import React from "react";
import useToggle from "./components/useToggle";

function App() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisible}>
        Toggle
      </button>

      {isVisible && <p>Hello Abhishek 👋</p>}
    </div>
  );
}

export default App;
