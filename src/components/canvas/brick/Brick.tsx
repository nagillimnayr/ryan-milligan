import { RoundedBox } from '@react-three/drei';
import { Object3DProps } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';

type BrickProps = Pick<Object3DProps, 'position' | 'rotation' | 'scale'>;
export const Brick = (props: BrickProps) => {
  const args: [number, number, number] = useMemo(() => {
    const width = 2;
    const height = 1;
    const depth = 1;
    return [width, height, depth];
  }, []);
  return (
    <RigidBody colliders={'hull'}>
      <RoundedBox args={args}>
        <meshStandardMaterial />
      </RoundedBox>
    </RigidBody>
  );
};
