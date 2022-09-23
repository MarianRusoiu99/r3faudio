import React from 'react'
import { useFrame } from "@react-three/fiber"
function Box(props) {
    // const box = React.useRef()



    return (
        <mesh ref={props.refi} >
            <boxGeometry  attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial wireframe={true} attach="material" color={0x0000FF} />
        </mesh>
    )
}

export default Box
