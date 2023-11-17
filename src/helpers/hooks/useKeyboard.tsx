import { MachineContext } from '@/components/dom/providers/machine-provider';
import { useEventListener } from '@react-hooks-library/core';
import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function useKeyboard() {
  const getThree = useThree(({ get }) => get);
  const { eventManager } = MachineContext.useSelector(({ context }) => context);

  useEventListener('keydown', (event) => {
    const { camera } = getThree();
    const controls = getThree().controls as unknown as CameraControls;

    // console.log(event.code);

    switch (event.code) {
      case 'Space': {
        console.log('Polar angle:', controls.polarAngle);
        eventManager.dispatchEvent({ type: 'KEY_SPACE' });
        break;
      }
      case 'KeyW': {
        eventManager.dispatchEvent({ type: 'KEY_W' });
        break;
      }
      case 'KeyA': {
        eventManager.dispatchEvent({ type: 'KEY_A' });
        break;
      }
      case 'KeyS': {
        eventManager.dispatchEvent({ type: 'KEY_S' });
        break;
      }
      case 'KeyD': {
        eventManager.dispatchEvent({ type: 'KEY_D' });
        break;
      }
      case 'ArrowLeft': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_LEFT' });
        break;
      }
      case 'ArrowUp': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_UP' });
        break;
      }
      case 'ArrowRight': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_RIGHT' });
        break;
      }
      case 'ArrowDown': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_DOWN' });
        break;
      }
    }
  });
}
