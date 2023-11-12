import { Box, Grid, Plane, useTexture } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { PI_OVER_TWO } from '@/helpers/constants';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export const Floor = () => {
  const checkerTexture = useTexture('textures/checkerboard.jpg', (texture) => {
    if (Array.isArray(texture)) return;
    texture.center.set(0.5, 0.5);
    const rep = 3;
    texture.repeat.set(rep, rep);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
  });

  const args: [number, number] = useMemo(() => {
    const width = 200;
    const height = 200;
    return [width, height];
  }, []);
  return (
    <group>
      <RigidBody type={'fixed'} colliders={'cuboid'} name={'floor-rigidbody'}>
        {/* <Box args={args} receiveShadow name={'floor'}> */}
        <Plane
          args={args}
          receiveShadow
          name={'floor'}
          rotation-x={-PI_OVER_TWO}
        >
          {/* <meshStandardMaterial
            map={checkerTexture}
            side={THREE.DoubleSide}
          /> */}
          <shadowMaterial />
        </Plane>
      </RigidBody>
    </group>
  );
};
