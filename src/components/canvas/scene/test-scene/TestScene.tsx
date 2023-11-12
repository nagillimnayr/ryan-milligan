import { CameraManager } from '../CameraManager';
import { Floor } from '../Floor';

export const TestScene = () => {
  return (
    <>
      <color attach={'background'} args={['#202020']} />
      {/* <fog attach={'fog'} args={['#202020', 5, 20]} /> */}
      <CameraManager />
      <Floor />
    </>
  );
};
