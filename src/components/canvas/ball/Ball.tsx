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
import {
  Mesh,
  type ColorRepresentation,
  type SphereGeometry,
  Vector3,
} from 'three';
import { Select } from '@react-three/postprocessing';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MachineContext } from '@/components/dom/providers/machine-provider';

const _worldPos = new Vector3();
const _direction = new Vector3();

export type BallProps = ShapeProps<typeof SphereGeometry> & {
  color?: ColorRepresentation;
};
export const Ball = ({ children, color = 'red', ...props }: BallProps) => {
  const { eventManager } = MachineContext.useSelector(({ context }) => context);
  const rigidBodyRef = useRef<RapierRigidBody>(null!);
  const ballRef = useRef<Mesh>(null!);
  useEffect(() => {
    const onSpace = () => {
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;
      _direction.set(0, 1, 0);

      rb.applyImpulse(_direction, true);
    };
    const onLeft = () => {
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;
      _direction.set(0, 1, 0);

      ball.getWorldPosition(_worldPos);
      ball.localToWorld(_direction);
      _direction.sub(_worldPos);

      rb.applyImpulse(_direction, true);
    };
    const onForward = () => {
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;
      _direction.set(0, 0, 1);

      ball.getWorldPosition(_worldPos);
      ball.localToWorld(_direction);
      _direction.sub(_worldPos);

      rb.applyImpulse(_direction, true);
    };
    const onRight = () => {
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;
      _direction.set(1, 0, 0);

      ball.getWorldPosition(_worldPos);
      ball.localToWorld(_direction);
      _direction.sub(_worldPos);

      rb.applyImpulse(_direction, true);
    };
    const onBackward = () => {
      const rb = rigidBodyRef.current;
      const ball = ballRef.current;
      _direction.set(0, 0, -1);

      ball.getWorldPosition(_worldPos);
      ball.localToWorld(_direction);
      _direction.sub(_worldPos);

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
  }, [eventManager]);

  return (
    <>
      <RigidBody ref={rigidBodyRef} colliders={'ball'}>
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
