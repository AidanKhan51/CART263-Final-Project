//import from libraries
import { Stage, CameraControls, Grid } from "@react-three/drei";
//import from Drawer.jsx
import Cabinet from "./Cabinet";
import DrawerOne from "./Drawer-one";
import DrawerTwo from "./Drawer-two";
import DrawerThree from "./Drawer-three";
import DrawerFour from "./Drawer-four";
const gridConfig = {
    cellSize: 5,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 10,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 100,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
}

const Experience = () => {
    return (

        <>
            <Grid position={[-2.5, -9.6, 0]} args={[10.5, 10.5]} {...gridConfig} />
            <color attach="background" args={["black"]} />
            <Stage environment={"dawn"}>
                <group position={[0, 0, 0]}>
                    < Cabinet scale={2} />
                    < DrawerOne scale={2} />
                    < DrawerTwo scale={2} />
                    < DrawerThree scale={2} />
                    < DrawerFour scale={2} />
                </group>
            </Stage>
            < CameraControls
                minDistance={15}
                maxDistance={50}
                enabled={true}
            />
        </>
    );
};

export default Experience;