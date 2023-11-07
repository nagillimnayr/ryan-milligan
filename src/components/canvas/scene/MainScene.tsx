import { Grid, PerspectiveCamera, Sphere, useHelper } from '@react-three/drei';
import { Name3D } from '../Name3D';
import { useRef } from 'react';
import { DirectionalLight, DirectionalLightHelper } from 'three';

export const MainScene = () => {
  const dirLightRef = useRef<DirectionalLight>(null!);
  const dirLightHelper = useHelper(dirLightRef, DirectionalLightHelper);
  return (
    <>
      <PerspectiveCamera makeDefault position-z={3} position-y={3} />
      <directionalLight
        ref={dirLightRef}
        position={[0, 30, 20]}
        intensity={2.0}
      />
      <ambientLight intensity={0.2} color={'#3a74f7'} />
      <Name3D position={[0, 0, -5]} scale={[1, 1, 0.5]} />
      <Grid infiniteGrid />

      <Sphere args={[1, 128, 128]} position-y={1}>
        <meshStandardMaterial color={'red'} metalness={0.5} />
      </Sphere>
    </>
  );
};
