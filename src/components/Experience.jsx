//import from libraries
import { Stage, CameraControls, Grid } from "@react-three/drei";
import { useState } from 'react'
//import from Drawer.jsx
import Cabinet from "./Cabinet";
import DrawerOne from "./Drawer-one";
import DrawerTwo from "./Drawer-two";
import DrawerThree from "./Drawer-three";
import DrawerFour from "./Drawer-four";
import Folder from "./Folder.jsx";

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

const Experience = (props) => {
    const [enabled, setEnabled] = useState(true);
    return (
        <>
            <Grid position={[-2.5, -9.6, 0]} args={[10.5, 10.5]} {...gridConfig} />
            <color attach="background" args={["black"]} />
            <Stage environment={"sunset"}>
                {/*apartment, city, dawn, forest, lobby, night, park, studio, sunset or warehouse*/}
                <group position={[0, 0, 0]}>
                    < Cabinet scale={2} />
                    <DrawerOne setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <DrawerTwo setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <DrawerThree setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <DrawerFour setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <Folder scale={2} />
                </group>
            </Stage>
            < CameraControls
                minDistance={15}
                maxDistance={50}
                enabled={enabled}
            />
        </>
    );
};

export default Experience;