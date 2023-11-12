import {
  Grid,
  PerspectiveCamera,
  Sphere,
  useHelper,
  CameraControls,
} from '@react-three/drei';
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
import { Ball } from '../Ball';
import { PI, PI_OVER_THREE, PI_OVER_TWO } from '@/helpers/constants';
import { Pendulum } from '../pendulum/Pendulum';

export const MainScene = () => {
  const dirLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  useHelper(dirLightRef, DirectionalLightHelper, 1, 'red');
  useHelper(pointLightRef, PointLightHelper, 1, 'red');
  return (
    <>
      <PerspectiveCamera makeDefault />
      <CameraControls makeDefault distance={15} polarAngle={PI_OVER_THREE} />

      {/* <pointLight
        ref={pointLightRef}
        position={[0, 5, 0]}
        castShadow
        distance={100}
        intensity={20}
      /> */}
      <directionalLight
        ref={dirLightRef}
        position={[10, 10, 10]}
        castShadow
        shadow-camera-near={1e-3}
        shadow-camera-far={1e4}
        shadow-camera-bottom={-20}
        shadow-camera-top={20}
        shadow-camera-left={-20}
        shadow-camera-right={20}
      />
      <ambientLight intensity={0.2} color={'#3a74f7'} />
      <Name3D position={[-5, 0, -5]} rotation-y={degToRad(45)}>
        RYAN
      </Name3D>
      <Floor />

      {/* <Ball args={[1, 128, 128]} position-y={2} castShadow>
        <meshStandardMaterial
          color={'red'}
          metalness={0.5}
          shadowSide={FrontSide}
        />
      </Ball> */}
      <Pendulum position={[0, 10, 0]} rotation-x={PI_OVER_TWO} />
    </>
  );
};
