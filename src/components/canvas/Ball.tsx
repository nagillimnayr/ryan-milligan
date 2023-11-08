import { Sphere, type ShapeProps } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { type ColorRepresentation, type SphereGeometry } from 'three';

export type BallProps = ShapeProps<typeof SphereGeometry> & {
  color?: ColorRepresentation;
};
export const Ball = ({ children, color = 'red', ...props }: BallProps) => {
  return (
    <RigidBody colliders={'ball'}>
      <Sphere castShadow receiveShadow {...props}>
        {children}
        <meshStandardMaterial color={color} />
      </Sphere>
    </RigidBody>
  );
};
