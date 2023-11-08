import { Center } from '@react-three/drei';
import { useTheme } from 'next-themes';
import { useSpring, animated } from '@react-spring/three';
import { anim } from '@/helpers/react-spring-utils';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { type Mesh, type Object3D, Plane, Vector3, Vector3Tuple } from 'three';
import { Object3DProps, useFrame } from '@react-three/fiber';
import { Z_AXIS } from '@/helpers/constants';

const _v1 = new Vector3();
const _lookPos = new Vector3();
const _plane = new Plane(Z_AXIS, -2);

const FONT_URL = 'fonts/Audiowide_Regular.json';

type Name3DProps = Pick<Object3DProps, 'position' | 'scale' | 'rotation'> & {
  children: string;
};
export const Name3D = function Name3D({ children, ...props }: Name3DProps) {
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

  return (
    <>
      <object3D ref={pivotRef} {...props}>
        <Center position-y={0.5} scale-z={0.75}>
          <anim.Text3D
            ref={textRef}
            font={FONT_URL}
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
            <animated.meshStandardMaterial color={spring.color} />
            {children}
          </anim.Text3D>
        </Center>
      </object3D>
    </>
  );
};
