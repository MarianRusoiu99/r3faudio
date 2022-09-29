import React from 'react'
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial,useTexture,
    useCubeTexture,} from "@react-three/drei"
    import texture from "../Assets/Water_001_SPEC.jpg"
import { Texture } from 'three';
import * as THREE from "three"
function Sphere(props) {
    // const Sphere = React.useRef()
    console.log(texture)
    const bumpMap = useTexture(texture);
    
    return (
        <mesh ref={props.refi} castShadow>
            <icosahedronGeometry  attach="geometry" args={[2, 100, 100]} />
            <MeshDistortMaterial  attach="material"
            // wireframe={true}
            color={"#fff"}
            side = {THREE.DoubleSide}
            bumpMap={bumpMap}
            roughness={0.01}
            metalness={0.999}
            bumpScale={0.11}
            clearcoat={1.2}
            clearcoatRoughness={12}
            radius={1.3}
            distort={0.8} />
        </mesh>
    )
}

export default Sphere
