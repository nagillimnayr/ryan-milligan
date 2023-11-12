import { PI_OVER_THREE, PI_OVER_TWO } from '@/helpers/constants';
import { CameraControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export const CameraManager = () => {
  return (
    <>
      <PerspectiveCamera makeDefault />
      <CameraControls
        makeDefault
        distance={15}
        polarAngle={PI_OVER_THREE}
        maxDistance={40}
        minDistance={1}
        maxPolarAngle={1.3}
        minPolarAngle={1e-5}
      />
    </>
  );
};
