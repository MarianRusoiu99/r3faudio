import React, { useRef, componentDidMount } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Audio from "../Utils/Audio"



function AudioElement(props) {
    const [audioState,setAudioState] = React.useState({path:props.src});
    const ref = useRef();
    
    

    // React.useEffect(() => {
    //   // console.log(ref.current.audioEl.current)
    //   var a = document.querySelector("audio#Audio")
    //   // var audio = new Audio(props.src,ref.current.audioEl.current)
    //   var audio = new Audio(props.src,a)
    //   audio.init()
    //   // setAudioState(audio)
    //   // var Data = audio.getData()
    //   // console.log(Data)
    //   // audio.getContext();
    //   // context.resume()
    //   //  var x = Audio.getData()
    //    console.log(audio.init())

    // },[])
const handleClick =  () => {
  var a = document.querySelector("audio#Audio")
  var audio = new Audio(props.src,a)
      var data = audio.init()
      console.log(data)
}
  return (
//     <ReactAudioPlayer
    
//   autoPlay
//   ref={ref}
//   controls
// />
<div>
  <p onClick={handleClick}>sdfsdsdsfsfsdfsdf</p>
</div>
  )
}

export default AudioElement