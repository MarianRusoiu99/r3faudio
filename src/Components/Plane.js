import React from 'react'

function Plane(props) {


  return (
    <mesh ref = {props.refi}>
            <planeBufferGeometry  attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial wireframe={true} attach="material" color={0x0000FF} />

    </mesh>
  )
}

export default Plane
