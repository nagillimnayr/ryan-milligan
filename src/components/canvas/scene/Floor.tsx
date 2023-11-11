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

  const [args, cuboidArgs]: [
    [number, number, number, number],
    [number, number, number],
  ] = useMemo(() => {
    const width = 25;
    const height = 25;
    return [
      [width, height, 1, 1],
      [width / 2, height / 2, 0.01],
    ];
  }, []);
  return (
    <group>
      {/* <Grid args={args} position-y={0.01} /> */}

      <RigidBody>
        <Plane rotation-x={-PI_OVER_TWO} args={args} receiveShadow>
          <meshStandardMaterial
            // shadowSide={THREE.FrontSide}
            map={checkerTexture}
            side={THREE.DoubleSide}
          />
        </Plane>
      </RigidBody>
      <CuboidCollider position={[0, 0, 0]} args={cuboidArgs} />
    </group>
  );
};
