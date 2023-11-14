/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGLTF } from '@react-three/drei';
import { Object3DProps } from '@react-three/fiber';
import { useEffect } from 'react';

type DragonModelProps = Pick<Object3DProps, 'position' | 'rotation' | 'scale'>;
export const DragonModel = (props: DragonModelProps) => {
  /* @ts-ignore */
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dragon/model.gltf',
  );

  useEffect(() => {
    console.log('nodes:', nodes);
  }, [nodes]);

  return (
    <>
      <group>
        {/* @ts-ignore */}
        <mesh
          name='dragon'
          geometry={nodes.dragon.geometry}
          material={materials['Default OBJ.001']}
          dispose={null}
          castShadow
          receiveShadow
        ></mesh>
      </group>
    </>
  );
};
