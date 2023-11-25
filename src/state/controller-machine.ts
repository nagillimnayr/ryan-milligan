import { type RootState } from '@react-three/fiber';
import { EventDispatcher } from 'three';
import { assign, createMachine } from 'xstate';

type ControllerContext = {
  getThree: () => RootState;
  eventManager: EventDispatcher<any>;
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
    }),
  },
  {
    actions: {},
  },
);
