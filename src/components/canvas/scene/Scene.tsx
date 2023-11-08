'use client';

import { Canvas, CanvasProps } from '@react-three/fiber';
import { Preload, CameraControls, PerspectiveCamera } from '@react-three/drei';
import { r3f } from '@/helpers/tunnel/tunnel';
import { Suspense } from 'react';
import { Physics } from '@react-three/rapier';

type SceneProps = Omit<CanvasProps, 'children'>;
export default function Scene({ ...props }: SceneProps) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} shadows>
      <Suspense>
        <Physics>
          {/* @ts-ignore */}
          <r3f.Out />
          <Preload all />
        </Physics>
      </Suspense>
    </Canvas>
  );
}
