import React from 'react'
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial,useTexture,
    useCubeTexture,} from "@react-three/drei"
    import texture from "../Assets/a.png"
import { Texture } from 'three';
function Sphere(props) {
    // const Sphere = React.useRef()
    console.log(texture)
    const bumpMap = useTexture(texture);
    
    return (
        <mesh ref={props.refi} castShadow>
            <icosahedronGeometry  attach="geometry" args={[2, 5, 5]} />
            <MeshDistortMaterial  attach="material"
            // wireframe={true}
            color={"#fff"}
            
            // bumpMap={bumpMap}
            roughness={0.1}
            metalness={1}
            bumpScale={0.005}
            clearcoat={1}
            clearcoatRoughness={1}
            radius={1}
            distort={0.8} />
        </mesh>
    )
}

export default Sphere
