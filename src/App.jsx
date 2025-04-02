import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas camera={{ position: [25, 0, 0], fov: 50 }} shadows>
      <Experience />
    </Canvas>
  );
}

export default App;