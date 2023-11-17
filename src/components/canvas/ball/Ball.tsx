import {
  Sphere,
  type ShapeProps,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import {
  BallCollider,
  RigidBody,
  BallArgs,
  RapierRigidBody,
} from '@react-three/rapier';
import * as THREE from 'three';
import { Select } from '@react-three/postprocessing';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MachineContext } from '@/components/dom/providers/machine-provider';
import { useFrame, useThree } from '@react-three/fiber';
import { Y_AXIS, Y_AXIS_NEG } from '@/helpers/constants';

const _worldPos = new THREE.Vector3();
const _camDirection = new THREE.Vector3();
const _direction = new THREE.Vector3();

const getCameraDirection = (camera: THREE.Camera) => {
  /*  Get camera direction. */
  camera.getWorldDirection(_camDirection);
  /* Project camera direction onto X-Z plane.*/
  _camDirection.setY(0);
  _camDirection.normalize();
  return _camDirection;
};

export type BallProps = ShapeProps<typeof THREE.SphereGeometry> & {
  color?: THREE.ColorRepresentation;
};
export const Ball = ({ children, color = 'red', ...props }: BallProps) => {
  const { eventManager } = MachineContext.useSelector(({ context }) => context);
  const getThree = useThree(({ get }) => get);

  const rigidBodyRef = useRef<RapierRigidBody>(null!);
  const ballRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const onSpace = () => {
      const { camera } = getThree();
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;

      _direction.copy(getCameraDirection(camera));

      _direction.set(0, 1, 0);
      rb.applyImpulse(_direction, true);
    };
    const onLeft = () => {
      const { camera } = getThree();
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;

      _direction.copy(getCameraDirection(camera));
      _direction.cross(Y_AXIS_NEG);

      rb.applyImpulse(_direction, true);
    };
    const onForward = () => {
      const { camera } = getThree();
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;

      _direction.copy(getCameraDirection(camera));

      rb.applyImpulse(_direction, true);
    };
    const onRight = () => {
      const { camera } = getThree();
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;

      _direction.copy(getCameraDirection(camera));
      _direction.cross(Y_AXIS);

      rb.applyImpulse(_direction, true);
    };
    const onBackward = () => {
      const { camera } = getThree();
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;

      _direction.copy(getCameraDirection(camera));
      _direction.multiplyScalar(-1);

      rb.applyImpulse(_direction, true);
    };

    eventManager.addEventListener('KEY_SPACE', onSpace);
    eventManager.addEventListener('KEY_ARROW_LEFT', onLeft);
    eventManager.addEventListener('KEY_ARROW_UP', onForward);
    eventManager.addEventListener('KEY_ARROW_RIGHT', onRight);
    eventManager.addEventListener('KEY_ARROW_DOWN', onBackward);

    eventManager.addEventListener('KEY_W', onForward);
    eventManager.addEventListener('KEY_A', onLeft);
    eventManager.addEventListener('KEY_S', onBackward);
    eventManager.addEventListener('KEY_D', onRight);

    return () => {
      eventManager.removeEventListener('KEY_SPACE', onSpace);
      eventManager.removeEventListener('KEY_ARROW_LEFT', onLeft);
      eventManager.removeEventListener('KEY_ARROW_UP', onForward);
      eventManager.removeEventListener('KEY_ARROW_RIGHT', onRight);
      eventManager.removeEventListener('KEY_ARROW_DOWN', onBackward);

      eventManager.removeEventListener('KEY_W', onForward);
      eventManager.removeEventListener('KEY_A', onLeft);
      eventManager.removeEventListener('KEY_S', onBackward);
      eventManager.removeEventListener('KEY_D', onRight);
    };
  }, [eventManager, getThree]);

  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        colliders={'ball'}
        linearDamping={0.5}
        angularDamping={0.5}
      >
        <Sphere ref={ballRef} castShadow receiveShadow {...props}>
          {children}
          {/* <meshStandardMaterial color={color} /> */}
          <MeshTransmissionMaterial
            color={color}
            distortionScale={0.5}
            temporalDistortion={0.0}
          />
        </Sphere>
        {/* <BallCollider args={[1]} /> */}
      </RigidBody>
    </>
  );
};
