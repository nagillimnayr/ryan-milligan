import { PropsWithChildren } from 'react';
import {
  EffectComposer,
  Outline,
  Selection,
} from '@react-three/postprocessing';

export const SelectionProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Selection>
        <EffectComposer autoClear={false}>
          <Outline blur edgeStrength={1000} />
        </EffectComposer>
        {children}
      </Selection>
    </>
  );
};
