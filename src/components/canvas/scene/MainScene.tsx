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
import { Ball } from '../Ball';
import { PI, PI_OVER_THREE, PI_OVER_TWO } from '@/helpers/constants';
import { Pendulum } from '../pendulum/Pendulum';
import { TrackingSpotLight } from './lighting/TrackingSpotLight';

export const MainScene = () => {
  const dirLightRef = useRef<DirectionalLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  const spotLightRef = useRef<SpotLight>(null!);
  // useHelper(pointLightRef, PointLightHelper, 1, 'red');

  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <>
      <color attach={'background'} args={['#202020']} />
      <fog attach={'fog'} args={['#202020', 5, 20]} />
      {/* <axesHelper scale={2} position-y={0.01} /> */}
      <PerspectiveCamera makeDefault />
      <CameraControls makeDefault distance={15} polarAngle={PI_OVER_THREE} />

      <TrackingSpotLight
        position={[8, 5, -5]}
        // color='#0c8cbf'
        // depthBuffer={depthBuffer}
      />
      <TrackingSpotLight
        position={[-8, 5, -5]}
        // color='#b00c3f'
        // depthBuffer={depthBuffer}
      />

      <ambientLight intensity={0.015} color={'#3a74f7'} />

      <Name3D position={[-5, 0, -5]} rotation-y={degToRad(45)}>
        RYAN
      </Name3D>
      <Floor />

      <Pendulum position={[5, 10, 0]} rotation-x={PI_OVER_TWO} />
    </>
  );
};
