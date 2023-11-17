import { EventDispatcher } from 'three';
import { createMachine } from 'xstate';

type RootContext = {
  eventManager: EventDispatcher<any>;
};

export const rootMachine = createMachine({
  predictableActionArguments: true,
  schema: {
    context: {} as RootContext,
  },
  tsTypes: {} as import('./root-machine.typegen').Typegen0,

  id: 'root-machine',

  context: () => ({
    eventManager: new EventDispatcher(),
  }),

  initial: 'idle',
  states: {
    idle: {},
  },
});
