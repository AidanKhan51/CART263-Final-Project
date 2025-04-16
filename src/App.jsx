import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense, useState } from "react"
import { Loader } from "@react-three/drei";


function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 5, 10])
  const [cameraAngle, setCameraAngle] = useState([0, 0, 0])
  return (
    <>
      <Canvas camera={{ position: [120, 0, 0], angle: [0, 0, 0], fov: 50 }} shadows>
        <Suspense>
          <CameraRig position={cameraPosition} angle={cameraAngle} />
          <Experience position={cameraPosition} onCameraPositionChange={setCameraPosition} angle={cameraAngle} onCameraAngleChange={setCameraAngle} />
        </Suspense>
      </Canvas>
      <Loader></Loader>
    </>
  );
}

function CameraRig({ position: [x, y, z], angle: [a, b, c] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.1)
    state.camera.lookAt(a, b, c)
    console.log([a, b, c])
  })
}

export default App;