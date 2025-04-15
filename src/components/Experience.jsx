//import from libraries
import { Stage, CameraControls, Grid, Html } from "@react-three/drei";
import React, { useState, createRef } from 'react'
//import from Drawer.jsx
import Cabinet from "./Cabinet";
import DrawerOne from "./Drawer-one";
import DrawerTwo from "./Drawer-two";
import DrawerThree from "./Drawer-three";
import DrawerFour from "./Drawer-four";
import Cables from "./Cables";
import Monitor from "./Monitor";

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
    const [formatType, setFormatType] = useState();
    const fileRef = createRef();
    const titleRef = createRef();
    const descriptionRef = createRef();
    const musicRef = createRef();
    const [drawerOneFile, setDrawerOneFile] = useState();
    const [drawerOneTitle, setDrawerOneTitle] = useState();
    const [drawerOneDescription, setDrawerOneDescription] = useState();
    const [drawerTwoFile, setDrawerTwoFile] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setDrawerOneFile(fileRef.current.files[0]);
        setDrawerOneTitle(titleRef.current.value);
        setDrawerOneDescription(descriptionRef.current.value);
        setDrawerTwoFile(musicRef.current.files[0]);
        e.target.reset()
    };
    const [formOn, setFormOn] = React.useState(false);
    const handleToggleForm = () => {
        setFormOn(!formOn);
    }
    return (
        <>
            <Grid position={[-2.5, -11.9, 0]} args={[10.5, 10.5]} {...gridConfig} />
            <color attach="background" args={["black"]} />
            <Stage environment={"sunset"}>
                {/*apartment, city, dawn, forest, lobby, night, park, studio, sunset or warehouse*/}
                <group position={[0, 0, 0]}>
                    < Cabinet scale={2} />
                    <DrawerOne setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} file={drawerOneFile} title={drawerOneTitle} description={drawerOneDescription} scale={2} />
                    <DrawerTwo setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} file={drawerTwoFile} scale={2} />
                    <DrawerThree setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <DrawerFour setEnabled={setEnabled} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <Monitor setEnabled={setEnabled} onToggleForm={handleToggleForm} cameraPosition={props.Cameraposition} onCameraPositionChange={props.onCameraPositionChange} scale={2} />
                    <Cables scale={2.005} />
                </group>
            </Stage>
            {formOn && <Html position={[-0.2, 11, 1.3]} rotation={[-3.1415927, 1.4835301, -3.1415927]} transform>
                <div className="menu">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="title" name="title" placeholder="Title" ref={titleRef}></input>
                        <select id="format" name="format" onChange={e => {
                            setFormatType(e.target.value)
                        }}>
                            <option value="Null">Select Format</option>
                            <option value="Image">Image</option>
                            <option value="Music">Music</option>
                            <option value="Model">3D Model</option>
                        </select>
                        {formatType === "Image" && <>
                            <input type="file" id="upload" name="upload"
                                accept="image/*" ref={fileRef}></input>
                        </>}
                        {formatType === "Music" && <>
                            <input type="file" id="upload" name="upload"
                                accept="audio/*" ref={musicRef}></input>
                        </>}
                        {formatType === "Model" && <>
                            <input type="file" id="upload" name="upload"
                                accept="image/png, image/jpeg, "></input>
                        </>}
                        <input type="text" id="description" name="description" placeholder="Description" ref={descriptionRef}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </Html>}
            < CameraControls
                minDistance={15}
                maxDistance={50}
                enabled={enabled}
            />
        </>
    );
};

export default Experience;