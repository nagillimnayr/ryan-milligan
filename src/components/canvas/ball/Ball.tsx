import {
  Sphere,
  type ShapeProps,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import { BallCollider, RigidBody, BallArgs } from '@react-three/rapier';
import { type ColorRepresentation, type SphereGeometry } from 'three';
import { Select } from '@react-three/postprocessing';
import { useCallback, useState } from 'react';

export type BallProps = ShapeProps<typeof SphereGeometry> & {
  color?: ColorRepresentation;
};
export const Ball = ({ children, color = 'red', ...props }: BallProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    /* Toggle selected. */
    setSelected((state) => !state);
    console.log('click');
  }, []);
  return (
    <>
      <RigidBody colliders={'ball'}>
        <Select enabled={true}>
          <Sphere castShadow receiveShadow {...props} onClick={handleClick}>
            {children}
            {/* <meshStandardMaterial color={color} /> */}
            <MeshTransmissionMaterial
              color={color}
              distortionScale={0.5}
              temporalDistortion={0.0}
            />
          </Sphere>
        </Select>
        {/* <BallCollider args={[1]} /> */}
      </RigidBody>
    </>
  );
};
