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
      }
      case 'KeyW': {
        eventManager.dispatchEvent({ type: 'KEY_W' });
      }
      case 'KeyA': {
        eventManager.dispatchEvent({ type: 'KEY_A' });
      }
      case 'KeyS': {
        eventManager.dispatchEvent({ type: 'KEY_S' });
      }
      case 'KeyD': {
        eventManager.dispatchEvent({ type: 'KEY_D' });
      }
      case 'ArrowLeft': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_LEFT' });
      }
      case 'ArrowUp': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_UP' });
      }
      case 'ArrowRight': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_RIGHT' });
      }
      case 'ArrowDown': {
        eventManager.dispatchEvent({ type: 'KEY_ARROW_DOWN' });
      }
    }
  });
}
