import { Center } from '@react-three/drei';
import { useTheme } from 'next-themes';
import { useSpring, animated } from '@react-spring/three';
import { anim } from '@/helpers/react-spring-utils';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { type Mesh, type Object3D, Plane, Vector3, Vector3Tuple } from 'three';
import { useFrame } from '@react-three/fiber';
import { Z_AXIS } from '@/helpers/constants';

const _v1 = new Vector3();
const _lookPos = new Vector3();
const _plane = new Plane(Z_AXIS, -2);

const FONT_URL = 'fonts/Audiowide_Regular.json';

type Name3DProps = {
  position?: Vector3Tuple;
  scale?: Vector3Tuple;
};
export const Name3D = function Name3D({ position, scale }: Name3DProps) {
  const { theme } = useTheme();
  const themeRef = useRef<string | undefined>(null!);
  themeRef.current = theme;

  const pivotRef = useRef<Object3D>(null!);
  const textRef = useRef<Mesh>(null!);

  const [spring, springRef] = useSpring(() => ({
    color: theme === 'dark' ? 'white' : 'black',
    config: {
      friction: 100,
    },
  }));
  const [lookSpring, looKSpringRef] = useSpring(() => ({
    lookPos: [0, 0, 0],
    onChange: ({ value }) => {
      const lookPos = value.lookPos as Vector3Tuple;
      _v1.set(...lookPos);
      pivotRef.current.lookAt(_v1);
    },
    config: {
      friction: 100,
    },
  }));

  const handlePointerEnter = useCallback(() => {
    springRef.start({
      color: '#3a74f7',
    });
  }, [springRef]);

  const handlePointerLeave = useCallback(() => {
    springRef.start({ color: themeRef.current === 'dark' ? 'white' : 'black' });
  }, [springRef]);

  useLayoutEffect(() => {
    springRef.start({ color: theme === 'dark' ? 'white' : 'black' });
  }, [springRef, theme]);

  // useFrame(({ pointer, camera, raycaster }) => {
  //   raycaster.setFromCamera(pointer, camera);
  //   raycaster.ray.intersectPlane(_plane, _lookPos);
  //   pivotRef.current?.lookAt(_lookPos);
  // });

  return (
    <>
      <object3D ref={pivotRef} scale={scale} position={position}>
        <Center position-y={0.5}>
          <anim.Text3D
            ref={textRef}
            font={FONT_URL}
            // scale={scale}
            letterSpacing={0.05}
            height={1}
            castShadow
            receiveShadow
            // bevelEnabled
            // bevelSize={0.005}
            // bevelSegments={36}
            // bevelThickness={0.02}
            curveSegments={64}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
          >
            {/* @ts-ignore */}
            <animated.meshStandardMaterial
              color={spring.color}
              // flatShading={false}
              // metalness={0.1}
              // roughness={0.1}
            />
            RYAN
          </anim.Text3D>
        </Center>
      </object3D>
    </>
  );
};
