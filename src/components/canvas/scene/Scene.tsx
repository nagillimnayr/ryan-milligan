'use client';

import { Canvas, type CanvasProps } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { r3f } from '@/helpers/tunnel/tunnel';
import SceneProviders from '../../providers/SceneProviders';

type SceneProps = Omit<CanvasProps, 'children'>;
export default function Scene({ ...props }: SceneProps) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} shadows gl={{ preserveDrawingBuffer: true }}>
      <SceneProviders>
        {/* @ts-ignore */}
        <r3f.Out />
        <Preload all />
      </SceneProviders>
    </Canvas>
  );
}
