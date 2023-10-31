import { Center, Text3D } from '@react-three/drei';

const FONT_URL = 'fonts/Roboto_Regular.json';

export const Name3D = function Name3D() {
  return (
    <>
      <Center>
        <Text3D font={FONT_URL} letterSpacing={0.05}>
          Ryan Milligan
        </Text3D>
      </Center>
    </>
  );
};
