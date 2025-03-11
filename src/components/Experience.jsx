//import from libraries
import { OrbitControls, Stage } from "@react-three/drei";
//import from Drawer.jsx
import Cabinet from "./Cabinet";
import DrawerOne from "./Drawer-one";
import DrawerTwo from "./Drawer-two";
import DrawerThree from "./Drawer-three";
import DrawerFour from "./Drawer-four";

const Experience = () => {
    return (
        <>
            <OrbitControls />
            <Stage environment={"dawn"}>
                <group position={[0, 0, 0]}>
                    < Cabinet scale={2} />
                    < DrawerOne scale={2} />
                    < DrawerTwo scale={2} />
                    < DrawerThree scale={2} />
                    < DrawerFour scale={2} />
                </group>
            </Stage>
        </>
    );
};

export default Experience;