import { PropsWithChildren, createContext } from 'react';
import { createActorContext } from '@xstate/react';
import { rootMachine } from '@/state/root-machine';

export const MachineContext = createActorContext(rootMachine);

export const MachineProvider = ({ children }: PropsWithChildren) => {
  return <MachineContext.Provider>{children}</MachineContext.Provider>;
};
