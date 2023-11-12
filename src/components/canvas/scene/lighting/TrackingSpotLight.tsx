import { Y_AXIS } from '@/helpers/constants';
import { useHelper, SpotLight, useDepthBuffer } from '@react-three/drei';
import { SpotLightProps, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { clamp } from 'three/src/math/MathUtils';

const PLANE = new THREE.Plane(Y_AXIS, 0);
const _vec = new THREE.Vector3();

type TrackingSpotLightProps = Pick<SpotLightProps, 'position'> & {
  color?: THREE.ColorRepresentation;
  depthBuffer?: THREE.DepthTexture;
};
export const TrackingSpotLight = ({
  position,
  color,
  depthBuffer,
}: TrackingSpotLightProps) => {
  const spotLight = useRef<THREE.SpotLight>(null!);

  useEffect(() => {
    spotLight.current.lookAt(_vec.set(0, 0, 0));
  }, []);

  // useHelper(spotLight, THREE.SpotLightHelper, 'white');
  useFrame((state, delta) => {
    const { pointer, raycaster, camera } = state;
    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(PLANE, _vec);
    _vec.x = clamp(_vec.x, -10, 10);
    _vec.z = clamp(_vec.z, -10, 10);
    _vec.y = 0;
    spotLight.current.target.position.lerp(_vec, delta);
  });
  return (
    <SpotLight
      ref={spotLight}
      position={position}
      color={color as THREE.Color & (string | number)}
      castShadow
      penumbra={1}
      intensity={20}
      angle={0.45}
      anglePower={4}
      attenuation={5}
      distance={100.0}
      depthBuffer={depthBuffer}
    />
  );
};
