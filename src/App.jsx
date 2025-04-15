import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense, useState } from "react"
import { Loader } from "@react-three/drei";


function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10])
  return (
    <>
      <Canvas camera={{ position: [30, 0, 0], fov: 50 }} shadows>
        <Suspense>
          <CameraRig position={cameraPosition} />
          <Experience position={cameraPosition} onCameraPositionChange={setCameraPosition} />
        </Suspense>
      </Canvas>
      <Loader></Loader>
    </>
  );
}

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.1)
    state.camera.lookAt(0, 0, 0)
  })
}

export default App;