import {
  Grid,
  PerspectiveCamera,
  Sphere,
  useHelper,
  CameraControls,
  AccumulativeShadows,
  useDepthBuffer,
} from '@react-three/drei';
import { Name3D } from '../Name/Name3D';
import { useRef } from 'react';
import {
  DirectionalLight,
  DirectionalLightHelper,
  FrontSide,
  PointLight,
  PointLightHelper,
  SpotLight,
  SpotLightHelper,
} from 'three';
import { Floor } from './Floor';
import { degToRad } from 'three/src/math/MathUtils';
import { Ball } from '../ball/Ball';
import { PI, PI_OVER_THREE, PI_OVER_TWO } from '@/helpers/constants';
import { Pendulum } from '../pendulum/Pendulum';
import { TrackingSpotLight } from './lighting/TrackingSpotLight';
import { useKeyboard } from '@/helpers/hooks/useKeyboard';
import { CameraManager } from './CameraManager';
import { DragonModel } from '@/components/canvas/models/DragonModel';

export const MainScene = () => {
  const dirLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  const spotLightRef = useRef<SpotLight>(null!);
  // useHelper(pointLightRef, PointLightHelper, 1, 'red');

  useKeyboard();

  return (
    <>
      <DragonModel />
      <color attach={'background'} args={['#202020']} />
      <fog attach={'fog'} args={['#202020', 5, 20]} />
      {/* <axesHelper scale={2} position-y={0.01} /> */}
      <CameraManager />

      <TrackingSpotLight position={[0, 5, 2]} />
      {/* <TrackingSpotLight position={[-3, 5, -3]} /> */}
      {/* <TrackingSpotLight position={[3, 5, -3]} /> */}

      <ambientLight intensity={0.015} color={'#3a74f7'} />

      <Name3D position={[-5, 0, -5]} rotation-y={degToRad(45)}>
        RYAN
      </Name3D>
      <Floor />

      <Pendulum position={[5, 10, 0]} rotation-x={PI_OVER_TWO} />
    </>
  );
};
