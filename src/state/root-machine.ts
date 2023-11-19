import { RootState } from '@react-three/fiber';
import { EventDispatcher } from 'three';
import { assign, createMachine } from 'xstate';

type RootContext = {
  getThree: () => RootState;
  eventManager: EventDispatcher<any>;
};

type RootEvents = { type: 'ASSIGN_GET_THREE'; getThree: () => RootState };

export const rootMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as RootContext,
      events: {} as RootEvents,
    },
    tsTypes: {} as import('./root-machine.typegen').Typegen0,

    id: 'root-machine',

    context: () => ({
      getThree: null!,
      eventManager: new EventDispatcher<any>(),
    }),

    on: {
      ASSIGN_GET_THREE: {
        actions: [
          assign({
            getThree: (context, event) => event.getThree,
          }),
        ],
      },
    },

    initial: 'idle',
    states: {
      idle: {},
    },
  },
  {},
);
