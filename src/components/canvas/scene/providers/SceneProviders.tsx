import { Suspense, type PropsWithChildren } from 'react';
import { Physics } from '@react-three/rapier';
import {
  EffectComposer,
  Outline,
  Selection,
} from '@react-three/postprocessing';
import { SelectionProvider } from './SelectionProvider';

export const SceneProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Suspense>
        <Physics debug>
          <SelectionProvider>{children}</SelectionProvider>
        </Physics>
      </Suspense>
    </>
  );
};
