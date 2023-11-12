import {
  Box,
  Grid,
  MeshReflectorMaterial,
  Plane,
  useTexture,
} from '@react-three/drei';
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

  const args: [number, number, number, number] = useMemo(() => {
    const width = 200;
    const height = 200;
    return [width, height, width, height];
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
            metalness={1}
            roughness={0.5}
          /> */}
          {/* <shadowMaterial /> */}
          <MeshReflectorMaterial
            mirror={1}
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#050505'
            metalness={0.5}
          />
        </Plane>
      </RigidBody>
    </group>
  );
};
