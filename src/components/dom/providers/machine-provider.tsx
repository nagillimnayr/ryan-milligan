import { PropsWithChildren, createContext, useMemo } from 'react';
import { createActorContext, useInterpret } from '@xstate/react';
import { rootMachine } from '@/state/root-machine';
import { InterpreterFrom } from 'xstate';

type MachineContextType = {
  rootActor: InterpreterFrom<typeof rootMachine>;
};
export const MachineContext = createContext<MachineContextType>(null!);

export const MachineProvider = ({ children }: PropsWithChildren) => {
  const rootActor = useInterpret(rootMachine);

  const context: MachineContextType = useMemo(() => {
    return {
      rootActor: rootActor,
    };
  }, [rootActor]);
  return (
    <MachineContext.Provider value={context}>
      {children}
    </MachineContext.Provider>
  );
};
