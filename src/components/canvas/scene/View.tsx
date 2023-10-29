'use client';

import {
  forwardRef,
  type HTMLProps,
  type PropsWithChildren,
  Suspense,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  PerspectiveCamera,
  View as ViewImpl,
  CameraControls,
} from '@react-three/drei';
import { Three } from '@/helpers/tunnel/Three';
import { type Vector3Tuple, type ColorRepresentation } from 'three';

type CommonProps = {
  color?: ColorRepresentation;
  cameraPosition?: Vector3Tuple;
};
export const Common = ({ color,
  cameraPosition = [0,0,10]
}: CommonProps) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    {/* <pointLight position={[-10, -10, -10]} color='blue' /> */}
    <directionalLight position-z={1} intensity={0.1} />
    <PerspectiveCamera makeDefault fov={40} position={cameraPosition} />
  </Suspense>
);

type ViewProps = PropsWithChildren &
  HTMLProps<HTMLDivElement> & {
    orbit?: boolean;
  };
const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef(null!);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef}>
            {children}
            {orbit && <CameraControls makeDefault />}
          </ViewImpl>
        </Three>
      </>
    );
  },
);
View.displayName = 'View';

export { View };
