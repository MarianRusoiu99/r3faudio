
import { createAudio } from "../Utils/AudioContext";


import React,{useRef,useEffect,useState,useContext} from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { aContext } from "../App";
function Audio(props) {

  const value = React.useContext(aContext); 
  console.log(value)
    
  
     const ref = useRef(ReactAudioPlayer)
    
    useEffect(()=>{
        // console.log(ref)

        // const { context, update } = createAudio(ref.current?.props.src,ref)
        createAudio(ref.current.props.src,ref.current.audioEl.current)
        .then((response)=>{setUpdated(response)})
        
        // console.log(update())
    },[ref])

    // const handleClick = () => {
    //     console.log(updated.update())
       
    // }
   
  return (
    <>
    {/* <p>{updated ? updated.update() : "nothing"}</p> */}
    <p onClick = {handleClick}>Busdfsdfsdfsd</p>
    <ReactAudioPlayer
  src={props.src}
  ref = {ref}
  autoPlay
  controls
/>

</>
  )
}

export default Audio