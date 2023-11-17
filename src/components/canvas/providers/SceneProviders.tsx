import { Suspense, type PropsWithChildren } from 'react';
import { Physics } from '@react-three/rapier';
import { SelectionProvider } from './SelectionProvider';

export default function SceneProviders({ children }: PropsWithChildren) {
  return (
    <>
      <Suspense>
        <Physics>
          <SelectionProvider>{children}</SelectionProvider>
        </Physics>
      </Suspense>
    </>
  );
}
