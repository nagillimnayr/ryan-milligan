import { useEventListener } from '@react-hooks-library/core';
import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export function useKeyboard() {
  const getThree = useThree(({ get }) => get);

  useEventListener('keypress', (event) => {
    const { camera } = getThree();
    const controls = getThree().controls as unknown as CameraControls;
    switch (event.code) {
      case 'Space': {
        console.log('Polar angle:', controls.polarAngle);
      }
    }
  });
}
