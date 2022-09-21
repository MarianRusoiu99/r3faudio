import React, { useRef, componentDidMount } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Audio from "../Utils/Audio"



function AudioElement(props) {
    const [audioState,setAudioState] = React.useState({path:props.src});
    const ref = useRef();
    
    

    React.useEffect(() => {
      // console.log(ref.current.audioEl.current)
      var a = document.querySelector("audio#Audio")
      // var audio = new Audio(props.src,ref.current.audioEl.current)
      var audio = new Audio(props.src,a)
      setAudioState(audio)
      var Data = audio.init()
      console.log(Data)
     
      

    },[])

  return (
//     <ReactAudioPlayer
    
//   autoPlay
//   ref={ref}
//   controls
// />
<div></div>
  )
}

export default AudioElement