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

    var file = document.getElementById("thefile");
    file.onchange = function(){
      var files = this.files;
      var a = document.querySelector("audio#Audio")
      var audio = new Audio(URL.createObjectURL(files[0]), a)
      
      var data = audio.init()
      setData({ context: data.context, analyser: data.analyser, dataArray: data.dataArray })
      a.play()
      var overlay = document.getElementsByClassName("overlay");
   
      overlay[0].style.display = "none";
    }

    
  }
    







  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <appContext.Provider
        value={{ data }}
      >



        <div className="overlay">

        <input onClick={handleClick} type="file" id="thefile" accept="audio/*" name={"sdfsdfsd"}/>
      
        </div>
        <Canvas flat linear>
          <Main />
        </Canvas>

      </appContext.Provider>
    </div>
  );
}

export default App;
