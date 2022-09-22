import React, { createContext, useRef } from "react"
import './App.css';
import { Canvas } from "@react-three/fiber";
import mp3 from "./AudioAssets/a.mp3";

import Audio from "./Utils/Audio"
import Main from "./Components/Main"
import './App.css';
export const appContext = createContext();

function App() {
  const [data, setData] = React.useState({ context: null, analyser: null, dataArray: null })
  const handleClick = () => {
    var a = document.querySelector("audio#Audio")
    var audio = new Audio(mp3, a)
    var data = audio.init()
    setData({ context: data.context, analyser: data.analyser, dataArray: data.dataArray })
    console.log(data)
    var b = document.querySelector("#startBtn").style.display = "none";
    a.play()
  }







  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <appContext.Provider
        value={{ data }}
      >
        <p id="startBtn" onClick={handleClick}>Start</p>
        <Canvas flat linear>
          <Main />
        </Canvas>

      </appContext.Provider>
    </div>
  );
}

export default App;
