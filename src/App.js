import React,{createContext} from "react"
import './App.css';
import Audio from './Components/Audio';
import mp3 from "./AudioAssets/a.mp3";

export const aContext = createContext(undefined);

function App() {
  const [pass, setPass] = React.useState({context: null, audioSource:mp3, update: null})
  return (
    <div className="App">
      <aContext.Provider value={pass}>
      <Audio src = {mp3}/>
      </aContext.Provider>
    </div>
  );
}

export default App;
