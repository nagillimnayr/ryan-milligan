import { Box } from '@react-three/drei';
import { type Object3DProps } from '@react-three/fiber';
import * as THREE from 'three';

type CubeProps = Pick<Object3DProps, 'position' | 'rotation' | 'scale'> & {
  color?: THREE.ColorRepresentation;
};
export const Cube = ({ color, ...props }: CubeProps) => {
  return (
    <object3D {...props}>
      <Box position-y={0.5}>
        <meshStandardMaterial color={color} />
      </Box>
    </object3D>
  );
};
