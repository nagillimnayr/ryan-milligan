import { type PropsWithChildren, useMemo, useCallback } from 'react';
import { createActorContext } from '@xstate/react';
import { rootMachine } from '@/state/root-machine';
import { EventDispatcher } from 'three';

export const MachineContext = createActorContext(rootMachine);

export const MachineProvider = ({ children }: PropsWithChildren) => {
  const machine = useCallback(
    () =>
      rootMachine.withContext(() => ({
        eventManager: new EventDispatcher(),
        getThree: null!,
      })),

    [],
  );

  return (
    <MachineContext.Provider machine={machine}>
      {children}
    </MachineContext.Provider>
  );
};
