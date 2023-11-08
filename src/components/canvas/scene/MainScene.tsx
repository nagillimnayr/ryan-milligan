import { Grid, PerspectiveCamera, Sphere, useHelper } from '@react-three/drei';
import { Name3D } from '../Name/Name3D';
import { useRef } from 'react';
import {
  DirectionalLight,
  DirectionalLightHelper,
  FrontSide,
  PointLight,
  PointLightHelper,
} from 'three';
import { Floor } from './Floor';
import { degToRad } from 'three/src/math/MathUtils';

export const MainScene = () => {
  // const dirLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  // useHelper(dirLightRef, DirectionalLightHelper);
  useHelper(pointLightRef, PointLightHelper);
  return (
    <>
      <PerspectiveCamera makeDefault position-z={3} position-y={3} />
      {/* <directionalLight
        ref={dirLightRef}
        position={[10, 1, 20]}
        intensity={2.0}
        castShadow
      /> */}

      <pointLight
        ref={pointLightRef}
        position={[0, 5, 0]}
        castShadow
        distance={100}
        intensity={20}
      />

      <ambientLight intensity={0.2} color={'#3a74f7'} />
      <Name3D position={[-5, 0, -5]} rotation-y={degToRad(45)}>
        RYAN
      </Name3D>
      <Floor />

      <Sphere args={[1, 128, 128]} position-y={1} castShadow>
        <meshStandardMaterial
          color={'red'}
          metalness={0.5}
          shadowSide={FrontSide}
        />
      </Sphere>
    </>
  );
};
