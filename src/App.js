import React,{createContext} from "react"
import './App.css';
import AudioElement from './Components/AudioElement';
import mp3 from "./AudioAssets/a.mp3";



function App() {

  return (
    <div className="App">
     
      <AudioElement src = {mp3}/>
  
    </div>
  );
}

export default App;
