import React from 'react'
import { MeshDistortMaterial,useTexture,
  useCubeTexture,} from "@react-three/drei"
  import texture from "../Assets/a.png"
import { Texture } from 'three';
import * as THREE from "three"
function Plane(props) {

  const bumpMap = useTexture(texture);
  return (
    <mesh position = {[0,0,0]} ref = {props.refi}>
            <planeGeometry  attach="geometry" args={[50, 50, 50 , 50]} />
            {/* <meshStandardMaterial wireframe={true} attach="material" color={0xffffFF} /> */}
            <MeshDistortMaterial  attach="material"
            // wireframe={true}
            color={"#fff"}
            side={THREE.DoubleSide}
            // bumpMap={bumpMap}
            roughness={0.01}
            metalness={1}
            bumpScale={0.005}
            clearcoat={1}
            clearcoatRoughness={1}
            radius={2}
            distort={0.8} />

    </mesh>
  )
}

export default Plane
