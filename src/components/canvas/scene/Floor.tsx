import { Box, Grid, Plane, useTexture } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import { PI_OVER_TWO } from '@/helpers/constants';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

export const Floor = () => {
  const checkerTexture = useTexture('textures/checker.png');

  useEffect(() => {
    checkerTexture.center.set(0.5, 0.5);
    const rep = 3;
    checkerTexture.repeat.set(3, 3);
    checkerTexture.wrapS = THREE.RepeatWrapping;
    checkerTexture.wrapT = THREE.RepeatWrapping;
  }, [checkerTexture]);

  const [args, cuboidArgs]: [
    [number, number, number, number],
    [number, number, number],
  ] = useMemo(() => {
    const width = 20;
    const height = 20;
    const widthSegments = 20;
    const heightSegments = 20;
    return [
      [width, height, widthSegments, heightSegments],
      [width / 2, height / 2, 0.01],
    ];
  }, []);
  return (
    <group>
      {/* <Grid args={args} position-y={0.01} /> */}
      <Box position-y={5}>
        <meshBasicMaterial map={checkerTexture} />
      </Box>
      <RigidBody>
        <Plane rotation-x={-PI_OVER_TWO} args={args} receiveShadow>
          <meshStandardMaterial
            // shadowSide={THREE.FrontSide}
            map={checkerTexture}
          />
        </Plane>
      </RigidBody>
      <CuboidCollider position={[0, 0, 0]} args={cuboidArgs} />
    </group>
  );
};
