import { Box } from '@react-three/drei';
import { type Object3DProps } from '@react-three/fiber';
import * as THREE from 'three';

type CubeProps = Pick<Object3DProps, 'position' | 'rotation' | 'scale'> & {
  color?: THREE.ColorRepresentation;
};
export const Cube = ({ color, ...props }: CubeProps) => {
  return (
    <group {...props}>
      <Box position-y={0.5} castShadow receiveShadow>
        <meshStandardMaterial color={color} />
      </Box>
    </group>
  );
};
