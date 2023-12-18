import { type RootState as ThreeState } from '@react-three/fiber';
import { RapierRigidBody } from '@react-three/rapier';
import { type EventDispatcher } from 'three';
import { assign, createMachine } from 'xstate';

type ControllerContext = {
  getThree: () => ThreeState;
  eventManager: EventDispatcher<any>;

  player: RapierRigidBody;
};

type ControllerEvents =
  | { type: 'INPUT_FORWARD' }
  | { type: 'INPUT_BACKWARD' }
  | { type: 'INPUT_LEFT' }
  | { type: 'INPUT_RIGHT' };

export const ControllerMachine = createMachine(
  {
    predictableActionArguments: true,
    schema: {
      context: {} as ControllerContext,
      events: {} as ControllerEvents,
    },
    tsTypes: {} as import('./controller-machine.typegen').Typegen0,

    id: 'controller-machine',

    context: () => ({
      getThree: null!,
      eventManager: null!,
      player: null!,
    }),

    initial: 'idle',
    states: {
      idle: {
        on: {
          INPUT_FORWARD: { actions: ['inputForward'] },
          INPUT_BACKWARD: { actions: ['inputBackward'] },
          INPUT_LEFT: { actions: ['inputLeft'] },
          INPUT_RIGHT: { actions: ['inputRight'] },
        },
      },
    },
  },
  {
    actions: {
      inputForward(context, event, meta) {
        const { player } = context;
        // player.applyImpulse();
      },
      inputBackward(context, event, meta) {
        const { player } = context;
      },
      inputLeft(context, event, meta) {
        const { player } = context;
      },
      inputRight(context, event, meta) {
        const { player } = context;
      },
    },
  },
);
