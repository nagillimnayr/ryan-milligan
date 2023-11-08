import { Grid, Plane } from '@react-three/drei';
import { useMemo } from 'react';
import { PI_OVER_TWO } from '@/helpers/constants';
import { FrontSide } from 'three';
import { RigidBody } from '@react-three/rapier';

export const Floor = () => {
  const args: [number, number, number, number] = useMemo(() => {
    const width = 20;
    const height = 20;
    const widthSegments = 20;
    const heightSegments = 20;
    return [width, height, widthSegments, heightSegments];
  }, []);
  return (
    <group>
      <Grid args={args} position-y={0.01} />
      <RigidBody>
        <Plane rotation-x={-PI_OVER_TWO} args={args} receiveShadow>
          <meshStandardMaterial shadowSide={FrontSide} />
        </Plane>
      </RigidBody>
    </group>
  );
};
