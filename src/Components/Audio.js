import React,{useRef} from 'react'
import { suspend } from "suspend-react";
import mp3 from "../AudioAssets/a.mp3" 
import ReactAudioPlayer from 'react-audio-player';

function Audio(props) {
   
    var audio =  useRef();
 
   React.useEffect(()=>{
    console.log(audio)
   async function createAudio(){
        // var buffer =  au.arrayBuffer();
           
        var context = new AudioContext();
        var source = context.createMediaElementSource();
    }
    const { context, update } = suspend(() => createAudio(), []);
   },[audio])
  return (
    <ReactAudioPlayer
  src={props.src}
  ref = {audio}
  
  controls
/>
    
  )
}

export default Audio
