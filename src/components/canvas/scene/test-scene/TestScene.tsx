import { useRef } from 'react';
import { CameraManager } from '../CameraManager';
import { Floor } from '../Floor';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

export const TestScene = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);

  useHelper(pointLightRef, THREE.PointLightHelper, 1, 'red');

  return (
    <>
      <color attach={'background'} args={['#202020']} />
      {/* <fog attach={'fog'} args={['#202020', 5, 20]} /> */}
      <CameraManager />
      <Floor />

      <pointLight
        ref={pointLightRef}
        castShadow
        position-y={10}
        distance={100}
        intensity={100}
      />
    </>
  );
};
