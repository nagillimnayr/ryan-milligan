import {
  Center,
  GradientTexture,
  MeshTransmissionMaterial,
  Outlines,
} from '@react-three/drei';
import { useTheme } from 'next-themes';
import { useSpring, animated } from '@react-spring/three';
import { anim } from '@/helpers/react-spring-utils';
import { useCallback, useLayoutEffect, useRef } from 'react';
import {
  type Mesh,
  type Object3D,
  Plane,
  Vector3,
  type Vector3Tuple,
  Vector2,
} from 'three';
import { type Object3DProps, useFrame } from '@react-three/fiber';
import { PI_OVER_TWO, Z_AXIS } from '@/helpers/constants';

const _v1 = new Vector3();

const FONT_URL = 'fonts/Audiowide_Regular.json';
const TEXT_COLOR_LIGHT = 'cyan';
const TEXT_COLOR_DARK = 'white';

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
    color: theme === 'dark' ? TEXT_COLOR_DARK : TEXT_COLOR_LIGHT,
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
    springRef.start({
      color: themeRef.current === 'dark' ? TEXT_COLOR_DARK : TEXT_COLOR_LIGHT,
    });
  }, [springRef]);

  useLayoutEffect(() => {
    springRef.start({
      color: theme === 'dark' ? TEXT_COLOR_DARK : TEXT_COLOR_LIGHT,
    });
  }, [springRef, theme]);

  return (
    <>
      <object3D ref={pivotRef} {...props} scale={2}>
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
            <animated.meshStandardMaterial
            // color={spring.color}
            ></animated.meshStandardMaterial>

            {children}
          </anim.Text3D>
        </Center>
      </object3D>
    </>
  );
};
