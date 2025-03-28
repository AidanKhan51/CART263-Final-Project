/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/drawer-four.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

const DrawerFour = (props) => {
  const { scene } = useGLTF('./models/drawer-four.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const [showText, setShowText] = React.useState(false);

  return <>
    {showText && <Html>
      <div>I am Drawer Four!</div>
    </Html>}
    <group
      {...props}
      dispose={null}
      onClick={() => setShowText(!showText)}
      onPointerEnter={() => console.log('enter')}
      onPointerLeave={() => console.log('leave')}
    >
      <group position={[0.651, -0.061, 1.225]} rotation={[0, 0, -Math.PI / 2]} scale={0.733}>
        <group position={[0, 0.888, 0]} scale={0.679}>
          <primitive object={nodes.Bone_1} />
          <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} position={[-0.087, 0.828, -2.461]} rotation={[0, 0, Math.PI / 2]} scale={[1.986, 0.35, 1.986]}>
            <mesh geometry={nodes.Plane003.geometry} material={nodes.Plane003.material} position={[-0.175, -0.343, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.42, 1.012, 0.606]} />
          </mesh>
          <mesh geometry={nodes.Cube011.geometry} material={nodes.Cube011.material} position={[-0.03, -0.115, -0.9]} rotation={[0, 0, Math.PI / 2]} scale={[0.842, 0.109, 0.064]} />
        </group>
        <primitive object={nodes.Bone} />
        <mesh geometry={nodes.Cube012.geometry} material={nodes.Cube012.material} position={[-0.02, 1.017, -0.549]} rotation={[0, 0, Math.PI / 2]} scale={[0.572, 0.074, 0.043]} />
      </group>
    </group>
  </>;
};

export default DrawerFour

useGLTF.preload('./models/drawer-four.glb')
