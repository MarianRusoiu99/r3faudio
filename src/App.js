import React,{createContext} from "react"
import './App.css';
import AudioElement from './Components/AudioElement';
import mp3 from "./AudioAssets/a.mp3";



import './App.css';
// import {createAudio} from "./Utils/Audio.js"

import { suspend } from "suspend-react";
import Audio from "./Components/Audio"
function App() {

  // const { context, update } = suspend(() => createAudio(mp3), [mp3]);

  return (
    <div className="App">
     <Audio src = {mp3}/>

    </div>
  );
}

export default App;
