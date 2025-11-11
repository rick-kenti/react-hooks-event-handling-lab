import React from "react";
import Keypad from "./components/Keypad";
import EyesOnMe from "./components/EyesOnMe";

function App() {
  return (
    <div className="App">
      <h1>React Events Lab</h1>
      
      <section>
        <h2>Keypad Component</h2>
        <Keypad />
      </section>

      <section>
        <h2>Eyes On Me Component</h2>
        <EyesOnMe />
      </section>
    </div>
  );
}

export default App;
