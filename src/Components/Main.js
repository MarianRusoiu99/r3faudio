import React from 'react'
import { OrbitControls } from "@react-three/drei";
import { useContext } from "react";
import { appContext } from "../App";
import Box from './Box.js';
import Sphere from './Sphere.js';
import * as THREE from "three"
import {
    EffectComposer,
    DepthOfField,
    Bloom,
    Noise,
    Vignette,
    Outline,
    ChromaticAberration
  } from "@react-three/postprocessing";

import { useFrame } from '@react-three/fiber';
function Main() {
    const box = React.useRef()
    const post = React.useRef()
    const control = React.useRef()
    const light = React.useRef()

    var update = 1
    const { data } = useContext(appContext);
    function smootherstep( x, min, max ) {

        if ( x <= min ) return 0;
        if ( x >= max ) return 1;
    
        x = ( x - min ) / ( max - min );
    
        return x * x * x * ( x * ( x * 6 - 15 ) + 10 );
    
    }
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
            box.current.rotation.y += update / 20000
            box.current.rotation.z += update / 16000
            box.current.rotation.x += update / 10000
            // box.current.rotation.z += update / 1000
            box.current.material._time.value += update/10 
            box.current.material._distort.value = smootherstep(Math.pow(2,update/25)/10+1.0,1,5)
            box.current.material._sheen = update/100
            control.current.autoRotateSpeed = update/10
            console.log(light.current.position.x)
            light.current.position.z = light.current.position.x = light.current.position.z = Math.sin( box.current.material._time.value)
        }
    )
    return (
        <>
            {/* <Box refi={box} /> */}
                   {/* <pointLight position={[20, 20, 50]}  intensity={20.5} color={"0xd996d4"} /> */}
                   <pointLight position={[20, 20, 50]}  intensity={20.5} color={"#fff"} />
            <pointLight position={[-20, -20, -50]}  intensity={20.5} color={"#d996d4"} />
            <pointLight ref={light} position={[-20, -20, -50]}  intensity={50.5} color={"#d996d4"} />
            <Sphere refi={box}/>
            <OrbitControls ref={control} autoRotate={true} />
            <EffectComposer multisampling={0} disableNormalPass={true}>
        <DepthOfField
          focusDistance={0}
          focalLength={0.72}
          bokehScale={5}
          height={580}
        />
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.35} />
        <Vignette eskil={false} offset={0.01} darkness={1.1} />
        <ChromaticAberration ref={post} offset={new THREE.Vector2(0.1,0.1)}/>
      </EffectComposer>
        </>
    )
}

export default Main
