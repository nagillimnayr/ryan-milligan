import { Y_AXIS } from '@/helpers/constants';
import { useHelper, SpotLight, useDepthBuffer } from '@react-three/drei';
import { SpotLightProps, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { clamp } from 'three/src/math/MathUtils';
import { useEventListener } from '@react-hooks-library/core';

const PLANE = new THREE.Plane(Y_AXIS, 0);
const _targetPos = new THREE.Vector3();
const _lightPos = new THREE.Vector3();
const _direction = new THREE.Vector3();

const LOOK_RADIUS = 15;

const ANGLE = 0.35;

type TrackingSpotLightProps = Pick<SpotLightProps, 'position'> & {
  color?: THREE.ColorRepresentation;
  depthBuffer?: THREE.DepthTexture;
};
export const TrackingSpotLight = ({
  position,
  color,
  depthBuffer,
}: TrackingSpotLightProps) => {
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  const coneRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    spotLightRef.current.lookAt(_targetPos.set(0, 0, 0));
  }, []);

  // useHelper(spotLight, THREE.SpotLightHelper, 'white');
  useFrame((state, delta) => {
    const { pointer, raycaster, camera } = state;
    const spotLight = spotLightRef.current;

    spotLight.getWorldPosition(_lightPos);

    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(PLANE, _targetPos);

    _targetPos.y = 0;
    _lightPos.y = 0;

    _direction.subVectors(_targetPos, _lightPos);
    const distance = _direction.length();
    _direction.divideScalar(distance);

    _targetPos.copy(_lightPos);
    _targetPos.addScaledVector(_direction, Math.min(distance, LOOK_RADIUS));

    spotLight.target.position.y = 0;
    spotLight.target.position.lerp(_targetPos, delta);
  });

  useEffect(() => {
    const spotLight = spotLightRef.current;
    coneRef.current = spotLight.children[0] as THREE.Mesh;
    spotLight.target.position.set(0, 0, 0);
    spotLight.target.getWorldPosition(_targetPos);
    spotLight.lookAt(_targetPos);
  }, []);

  return (
    <SpotLight
      ref={spotLightRef}
      position={position}
      color={color as THREE.Color & (string | number)}
      castShadow
      // volumetric
      penumbra={0}
      intensity={100}
      angle={ANGLE}
      anglePower={5}
      attenuation={50}
      distance={50.0}
      depthBuffer={depthBuffer}
      radiusBottom={17.5}
      opacity={0.2}
    />
  );
};
