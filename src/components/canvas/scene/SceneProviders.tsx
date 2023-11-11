import { Suspense, type PropsWithChildren } from 'react';
import { Physics } from '@react-three/rapier';

export const SceneProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Suspense>
        <Physics debug>{children}</Physics>
      </Suspense>
    </>
  );
};
