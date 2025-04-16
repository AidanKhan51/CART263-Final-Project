//Import libraries
import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense, useState } from "react"
import { Loader } from "@react-three/drei";

//App is the parent function of everything. The important things that happen in this file specifically are camera controls.
function App() {
  //camera position and camera angle are defined here, they are used later in the camera rig
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10])
  const [cameraAngle, setCameraAngle] = useState([0, 0, 0])
  return (
    <>
      <Canvas camera={{ position: [120, 0, 0], angle: [0, 0, 0], fov: 50 }} shadows>
        {'// Above line sets default camera position, fov, and angle in the canvas'}
        {'// Suspense is used to hide the GUI until models are finished loading'}
        <Suspense>
          {'// Camera rig used to move camera angle and position'}
          <CameraRig position={cameraPosition} angle={cameraAngle} />
          {'// VERY important location. This is where most of the program is run. Visit Experience.jsx to view. Carries a couple props related to the camera rig.'}
          <Experience position={cameraPosition} onCameraPositionChange={setCameraPosition} angle={cameraAngle} onCameraAngleChange={setCameraAngle} />
        </Suspense>
      </Canvas>
      {'// R3F Drei default loader'}
      <Loader></Loader>
    </>
  );
}

//Camera rig function, changes camera position and angle using variables called within various children files
function CameraRig({ position: [x, y, z], angle: [a, b, c] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.1)
    state.camera.lookAt(a, b, c)
  })
}

//Export app
export default App;