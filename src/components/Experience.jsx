//import from libraries
import { Stage, CameraControls, Grid, Html } from "@react-three/drei";
import React, { useState, createRef } from 'react'
//import 3D models
import Cabinet from "./Cabinet";
import DrawerOne from "./Drawer-one";
import DrawerTwo from "./Drawer-two";
import DrawerThree from "./Drawer-three";
import DrawerFour from "./Drawer-four";
import Cables from "./Cables";
import Monitor from "./Monitor";

//grid background parameters
const gridConfig = {
    cellSize: 10,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 20,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 400,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
}

//grid background parameters
const Experience = (props) => {
    //variable to enable or disable camera movement
    const [enabled, setEnabled] = useState(true);
    //becomes true when form is submitted, which then renders the file 3d model
    const [folderSubmitted, setFolderSubmitted] = React.useState(false);
    //variable that carries the format type selected in the form to determine which files are accepted to upload
    const [formatType, setFormatType] = useState();
    //Creates Ref for the image within the image artifact
    const fileRef = createRef();
    //Creates Ref for the title of the Image folder
    const titleRef = createRef();
    //Creates Ref for the description inside the Image folder
    const descriptionRef = createRef();
    //Creates Ref for the music within the music artifact
    const musicRef = createRef();
    //Creates Ref for video within the video artifact
    const videoRef = createRef();
    //Variables that store the image, title, and description of the file in drawer one
    const [drawerOneFile, setDrawerOneFile] = useState();
    const [drawerOneTitle, setDrawerOneTitle] = useState();
    const [drawerOneDescription, setDrawerOneDescription] = useState();
    //Form submit handler
    const handleSubmit = (e) => {
        //prevent page reload
        e.preventDefault();
        //if an image is submitted, allow folder in drawer one to render when drawer is open
        if (formatType === "Image") {
            setFolderSubmitted(true)
        }
        //stores variables with the uploaded image, uploaded title, and uploaded description filled out in the form
        setDrawerOneFile(fileRef.current.files[0]);
        setDrawerOneTitle(titleRef.current.value);
        setDrawerOneDescription(descriptionRef.current.value);
        //resets the form
        e.target.reset()
    };
    //Determines whether form is rendered, called in Monitor.jsx onClick
    const [formOn, setFormOn] = React.useState(false);
    //toggles when form is rendered, handler is needed to pass props
    const handleToggleForm = () => {
        setFormOn(!formOn);
    }
    return (
        <>
            {/* Sets grid position and config*/}
            <Grid position={[-2.5, -47.6, 0]} args={[10.5, 10.5]} {...gridConfig} />
            {'// Sets colour of background'}
            <color attach="background" args={["black"]} />
            {/* sets HDRI for environment*/}
            <Stage environment={"sunset"}>
                {/*available HDRIs: apartment, city, dawn, forest, lobby, night, park, studio, sunset or warehouse*/}
                <group position={[0, 0, 0]}>
                    {/*3D models rendered here*/}
                    < Cabinet scale={4} />
                    <DrawerOne setEnabled={setEnabled} cameraPosition={props.CameraPosition} cameraAngle={props.CameraAngle} onCameraPositionChange={props.onCameraPositionChange} onCameraAngleChange={props.onCameraAngleChange} file={drawerOneFile} title={drawerOneTitle} description={drawerOneDescription} onFolderSubmitted={folderSubmitted} scale={4} />
                    <DrawerTwo setEnabled={setEnabled} cameraPosition={props.Cameraposition} cameraAngle={props.CameraAngle} onCameraPositionChange={props.onCameraPositionChange} onCameraAngleChange={props.onCameraAngleChange} scale={4} />
                    <DrawerThree setEnabled={setEnabled} cameraPosition={props.Cameraposition} cameraAngle={props.CameraAngle} onCameraPositionChange={props.onCameraPositionChange} onCameraAngleChange={props.onCameraAngleChange} scale={4} />
                    <DrawerFour setEnabled={setEnabled} cameraPosition={props.Cameraposition} cameraAngle={props.CameraAngle} onCameraPositionChange={props.onCameraPositionChange} onCameraAngleChange={props.onCameraAngleChange} scale={4} />
                    <Monitor setEnabled={setEnabled} onToggleForm={handleToggleForm} cameraPosition={props.Cameraposition} cameraAngle={props.CameraAngle} onCameraPositionChange={props.onCameraPositionChange} onCameraAngleChange={props.onCameraAngleChange} scale={4} />
                    <Cables scale={4.01} />
                </group>
            </Stage>
            {/*Form is rendered if formOn (when the monitor is click) is true*/}
            {formOn && <Html position={[-0.8, 44.5, 5.2]} rotation={[-3.1415927, 1.4835301, -3.1415927]} transform>
                <div className="menu">
                    {/*When form is submitted, run handler*/}
                    <form onSubmit={handleSubmit}>
                        {/*Header*/}
                        <h1 style={{ fontFamily: 'Pixelon', color: '#ffffff', fontSize: '40px', textAlign: 'center' }}>Add Artifact?</h1>
                        {/*text input for title of file*/}
                        <input type="text" id="title" name="title" placeholder="Title" ref={titleRef}></input>
                        {/*selection to determine file format*/}
                        <select id="format" name="format" onChange={e => {
                            setFormatType(e.target.value)
                        }}>
                            <option value="Null">Select Format</option>
                            <option value="Image">Image</option>
                            <option value="Music">Music</option>
                            <option value="Model">Model (not working)</option>
                            <option value="Video">Video </option>
                        </select>
                        {/*accept different files depending on selected format*/}
                        {formatType === "Image" && <>
                            <input type="file" id="upload" name="upload"
                                accept="image/*" ref={fileRef} style={{ fontFamily: 'Pixelon', color: '#ffffff' }}></input>
                        </>}
                        {formatType === "Music" && <>
                            <input type="file" id="upload" name="upload"
                                accept="audio/*" ref={musicRef} style={{ fontFamily: 'Pixelon', color: '#ffffff' }}></input>
                        </>}
                        {formatType === "Model" && <>
                            <input type="file" id="upload" name="upload"
                                accept="" style={{ fontFamily: 'Pixelon', color: '#ffffff' }}></input>
                        </>}
                        {formatType === "Video" && <>
                            <input type="file" id="upload" name="upload"
                                accept="video/*" ref={videoRef} style={{ fontFamily: 'Pixelon', color: '#ffffff' }}></input>
                        </>}
                        {/*text input for file description*/}
                        <input type="text" id="description" name="description" placeholder="Description" ref={descriptionRef}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </Html>}
            {/*sets camera controls*/}
            < CameraControls
                minDistance={60}
                maxDistance={200}
                enabled={enabled}
            />
        </>
    );
};
{/*exports to App*/ }
export default Experience;