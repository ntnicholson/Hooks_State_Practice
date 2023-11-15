import React, { useState } from "react";

let time = new Date().toLocaleTimeString();

function App() {
  let [currentTime, setTime] = useState(time);

  setInterval(GetTime, 1000);

  function GetTime() {
    setTime((currentTime = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default App;
