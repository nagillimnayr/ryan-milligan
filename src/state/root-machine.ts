import { type RootState as ThreeState } from '@react-three/fiber';
import { RapierRigidBody } from '@react-three/rapier';
import { EventDispatcher } from 'three';
import { assign, createMachine } from 'xstate';

type RootContext = {
  getThree: () => ThreeState;
  eventManager: EventDispatcher<any>;

  player: RapierRigidBody;
};

type RootEvents =
  | { type: 'ASSIGN_GET_THREE'; getThree: () => ThreeState }
  | { type: 'ASSIGN_PLAYER'; player: RapierRigidBody };

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

      player: null!,
    }),

    on: {
      ASSIGN_GET_THREE: {
        actions: [
          assign({
            getThree: (context, event) => event.getThree,
          }),
        ],
      },
      ASSIGN_PLAYER: {
        actions: [
          assign({
            player: (_, { player }) => player,
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
