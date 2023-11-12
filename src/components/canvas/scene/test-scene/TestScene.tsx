import { useRef } from 'react';
import { CameraManager } from '../CameraManager';
import { Floor } from '../Floor';
import * as THREE from 'three';
import { Box, useHelper } from '@react-three/drei';
import { TrackingSpotLight } from '../lighting/TrackingSpotLight';
import { Cube } from './Cube';
import { TWO_PI } from '@/helpers/constants';
import { generateUUID } from 'three/src/math/MathUtils';

const RAND_POS_SCALAR = 20;
const RAND_SCALE_SCALAR = 1;

const CUBES = [
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'cyan',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'red',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'blue',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'pink',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'orange',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'green',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'indigo',
  },
  {
    key: generateUUID(),
    position: [
      Math.random() * RAND_POS_SCALAR,
      0,
      Math.random() * RAND_POS_SCALAR,
    ],
    rotation: [0, Math.random() * TWO_PI, 0],
    scale: Math.random() * RAND_SCALE_SCALAR,
    color: 'purple',
  },
];

export const TestScene = () => {
  const pointLightRef = useRef<THREE.PointLight>(null!);

  useHelper(pointLightRef, THREE.PointLightHelper, 1, 'red');

  return (
    <>
      <color attach={'background'} args={['#202020']} />
      {/* <fog attach={'fog'} args={['#202020', 5, 20]} /> */}
      <CameraManager />
      <Floor />

      {/* <pointLight
        ref={pointLightRef}
        castShadow
        position-y={10}
        distance={100}
        intensity={100}
      /> */}

      <TrackingSpotLight position={[0, 5, 5]} />

      {CUBES.map((cube, index) => (
        <Cube
          key={cube.key}
          position={cube.position as THREE.Vector3Tuple}
          rotation={cube.rotation as THREE.Vector3Tuple}
          scale={cube.scale}
          color={cube.color}
        />
      ))}
    </>
  );
};
