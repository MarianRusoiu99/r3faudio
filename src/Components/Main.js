import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { useContext } from "react";
import { appContext } from "../App";
import Box from './Box.js';

import { useFrame } from '@react-three/fiber';
function Main() {
    const box = React.useRef()
    

    var update = 1
    const { data } = useContext(appContext);
    
    useFrame(
        () => {

            if (data.dataArray) {
                const array = new Uint8Array(data.analyser.frequencyBinCount);
                data.analyser.getByteFrequencyData(array);
                update = array.reduce(
                    (prev, cur) => prev + cur / array.length,
                    0
                )
            } else {
                update = 0;
            }
            box.current.rotation.x += update / 1000
            box.current.rotation.z += update / 1000
            // console.log(box.current.geometry.attributes.position.array)
            for(let i=0;i<box.current.geometry.attributes.position.array.length;i++){
                // console.log(box.current.geometry.attributes.position.array[i])
                // box.current.geometry.attributes.position.array[i] += Math.sin(update)
            }
        }
    )
    return (
        <>
            <Box refi={box} />
            <OrbitControls />
        </>
    )
}

export default Main
