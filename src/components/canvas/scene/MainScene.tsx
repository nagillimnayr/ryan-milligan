import { Grid, PerspectiveCamera, Sphere } from '@react-three/drei';
import { Name3D } from '../Name3D';

export const MainScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position-z={3} position-y={3} />
      <directionalLight position={[0, 30, 20]} intensity={2.0} />
      <Name3D position={[0, 0, -5]} scale={[1, 1, 0.5]} />
      <Grid infiniteGrid />
    </>
  );
};
