import { Suspense, type PropsWithChildren, useContext, useEffect } from 'react';
import { Physics } from '@react-three/rapier';
import { SelectionProvider } from './SelectionProvider';
import { MachineContext } from '@/components/dom/providers/machine-provider';
import { useThree } from '@react-three/fiber';

export default function SceneProviders({ children }: PropsWithChildren) {
  const rootActor = MachineContext.useActorRef();
  const getThree = useThree(({ get }) => get);

  /* Assign getThree to state machine. */
  useEffect(() => {
    rootActor.send({ type: 'ASSIGN_GET_THREE', getThree });
  }, [getThree, rootActor]);

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
