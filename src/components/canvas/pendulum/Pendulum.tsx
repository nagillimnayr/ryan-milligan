import { Cylinder, Sphere } from '@react-three/drei';
import { type Object3DProps } from '@react-three/fiber';
import {
  CylinderCollider,
  type RapierRigidBody,
  RigidBody,
  BallArgs,
  type CylinderArgs,
  useSphericalJoint,
  BallCollider,
} from '@react-three/rapier';
import { useMemo, useRef } from 'react';
import { type Group } from 'three';

const ROD_RADIUS = 0.25;
const ROD_HEIGHT = 5;
const BOB_RADIUS = 0.75;

type PendulumProps = Pick<Object3DProps, 'position' | 'rotation' | 'scale'>;
export const Pendulum = (props: PendulumProps) => {
  const groupRef = useRef<Group>(null!);
  const anchorRef = useRef<RapierRigidBody>(null!);
  const rodRef = useRef<RapierRigidBody>(null!);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useSphericalJoint(anchorRef, rodRef, [
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const cylinderArgs: CylinderArgs = useMemo(() => {
    return [ROD_HEIGHT / 2, ROD_RADIUS];
  }, []);
  return (
    <group ref={groupRef} {...props}>
      <RigidBody ref={anchorRef} />
      <axesHelper />
      <RigidBody ref={rodRef}>
        <group scale-y={ROD_HEIGHT}>
          <Cylinder
            position-y={-0.5}
            scale-x={ROD_RADIUS}
            scale-z={ROD_RADIUS}
            receiveShadow
            castShadow
          >
            <meshStandardMaterial />
          </Cylinder>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <CylinderCollider args={cylinderArgs} position-y={-0.5} />
        </group>
        <group position-y={-(ROD_HEIGHT + 0.5)}>
          <Sphere args={[BOB_RADIUS]} receiveShadow castShadow>
            <meshStandardMaterial />
          </Sphere>
          <BallCollider args={[BOB_RADIUS]} />
        </group>
      </RigidBody>
    </group>
  );
};
