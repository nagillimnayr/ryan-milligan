import {
  Center,
  GradientTexture,
  MeshTransmissionMaterial,
  Outlines,
} from '@react-three/drei';
import { useTheme } from 'next-themes';
import { useSpring, animated } from '@react-spring/three';
import { anim } from '@/helpers/react-spring-utils';
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { type Object3DProps, useFrame } from '@react-three/fiber';
import { PI_OVER_TWO, Z_AXIS } from '@/helpers/constants';
import { generateUUID } from 'three/src/math/MathUtils';
import { RigidBody } from '@react-three/rapier';

const _v1 = new THREE.Vector3();

// const FONT_URL = 'fonts/Audiowide_Regular.json';
const FONT_URL = 'fonts/Roboto_Regular.json';
const TEXT_COLOR_LIGHT = 'cyan';
const TEXT_COLOR_DARK = 'white';

type Name3DProps = Pick<Object3DProps, 'position' | 'scale' | 'rotation'> & {
  children: string;
};
export const Name3D = function Name3D({
  children,
  scale,
  ...props
}: Name3DProps) {
  const { theme } = useTheme();
  const themeRef = useRef<string | undefined>(null!);
  themeRef.current = theme;

  const pivotRef = useRef<THREE.Group>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  const charArray = useMemo(() => {
    return children
      .split('')
      .filter((char) => !Boolean(char.match(/\s/)))
      .map((char) => {
        return [char, generateUUID()];
      });
  }, [children]);
  const numOfChars = charArray.length;
  const startX = -numOfChars / 2;
  return (
    <>
      <group ref={pivotRef} {...props}>
        <object3D>
          {charArray.map((value, index) => {
            const [char, key] = value;
            return (
              <RigidBody
                colliders={'hull'}
                // position-y={1}
                // rotation-x={-PI_OVER_TWO}
                key={key}
                scale={2}
              >
                <Center position-y={1} position-x={startX + index}>
                  <anim.Text3D
                    ref={textRef}
                    font={FONT_URL}
                    letterSpacing={0.05}
                    height={1}
                    scale-z={0.5}
                    position-y={1}
                    castShadow
                    receiveShadow
                    // bevelEnabled
                    // bevelSize={0.005}
                    // bevelSegments={36}
                    // bevelThickness={0.02}
                    curveSegments={64}
                  >
                    {/* @ts-ignore */}
                    <animated.meshStandardMaterial />
                    {char}
                  </anim.Text3D>
                </Center>
              </RigidBody>
            );
          })}
        </object3D>
      </group>
    </>
  );
};
