import React, { useRef } from 'react'
import EarthDayMap from "../assets/8k_earth_day.jpg";
import { OrbitControls, Stars } from '@react-three/drei';
import EarthNormalMap from "../assets/8k_earth_normal_map.jpg";
import EarthSpecMap from "../assets/8k_earth_spec_map.jpg";
import EarthCloudMap from "../assets/8k_earth_clouds.jpg";
import { useFrame, useLoader } from '@react-three/fiber';
import {TextureLoader} from "three";
import * as THREE from 'three'

const Earth = (props) => {

  const [colorMap,normalMap,specMap,cloudMap] = useLoader(TextureLoader,[EarthDayMap,EarthNormalMap,EarthSpecMap,EarthCloudMap]);

  const earthRef = useRef()
  const cloudRef = useRef()

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime()

    earthRef.current.rotation.y = elapsedTime / 6
    cloudRef.current.rotation.y = elapsedTime / 6

  })
  return (
    <>
    {/* <ambientLight intensity={1} /> */}
    <pointLight
      position={[2,0,5]}
      intensity={1.2}
      color="#f6f3ea"
    />
    <Stars
      radius={300} // Radius of the inner sphere (default=100)
      depth={60} // Depth of area where stars should fit (default=50)
      count={20000} // Amount of stars (default=5000)
      factor={7} // Size factor (default=4)
      saturation={0} // Saturation 0-1 (default=0)
      fade={true} // Faded dots (default=false)
      enableZoom={true}
    />
    <mesh ref={cloudRef} position ={[0,0,3]}>
      <sphereGeometry args={[1.005, 32, 32]} />
      <meshPhongMaterial
        map={cloudMap}
        opacity={0.4}
        depthWrite={true}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
    <mesh ref={earthRef} position ={[0,0,3]}>

      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial specularMap={specMap} />
    <meshStandardMaterial map={colorMap} normalMap={normalMap}  
    metalness={0.4}
    roughness={0.7}
    />
    {/* <OrbitControls 
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      zoomSpeed={0.5}
      panSpeed={0.5}
      rotateSpeed={0.4}
    /> */}
    </mesh>
    </>
  )
}

export default Earth