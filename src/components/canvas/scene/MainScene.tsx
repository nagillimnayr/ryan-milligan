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
      <Name3D position={[0, 0, -5]} scale={[1, 1, 0.5]} />
      <Grid infiniteGrid />
    </>
  );
};
