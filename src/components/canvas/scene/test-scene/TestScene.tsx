import { useRef } from 'react';
import { CameraManager } from '../CameraManager';
import { Floor } from '../Floor';
import * as THREE from 'three';
import { Box, useHelper } from '@react-three/drei';
import { TrackingSpotLight } from '../lighting/TrackingSpotLight';
import { Cube } from './Cube';
import { TWO_PI } from '@/helpers/constants';
import { generateUUID } from 'three/src/math/MathUtils';
import { Brick } from '@/components/canvas/brick/Brick';

const RAND_POS_SCALAR = 20;
const RAND_SCALE_SCALAR = 1;

export const TestScene = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);

  useHelper(pointLightRef, THREE.PointLightHelper, 1, 'red');

  return (
    <>
      <color attach={'background'} args={['#202020']} />
      {/* <fog attach={'fog'} args={['#202020', 5, 20]} /> */}
      <ambientLight intensity={0.05} />
      <CameraManager />
      <Floor />

      <pointLight
        ref={pointLightRef}
        castShadow
        position-y={10}
        position-z={5}
        distance={100}
        intensity={100}
      />
      <pointLight
        ref={pointLightRef}
        castShadow
        position-y={10}
        position-z={-5}
        position-x={-5}
        distance={100}
        intensity={100}
      />
      <pointLight
        ref={pointLightRef}
        castShadow
        position-y={1}
        position-z={0}
        position-x={-2}
        distance={100}
        intensity={10}
      />

      <TrackingSpotLight position={[2, 20, 5]} />

      <Brick position-x={3} />
    </>
  );
};
