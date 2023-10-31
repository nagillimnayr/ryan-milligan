import { Center, Text3D } from '@react-three/drei';
import { useTheme } from 'next-themes';

const FONT_URL = 'fonts/Roboto_Regular.json';

export const Name3D = function Name3D() {
  const { theme } = useTheme();
  const color = theme === 'dark' ? 'white' : 'black';
  return (
    <>
      <Center>
        <Text3D font={FONT_URL} letterSpacing={0.05} material-color={color}>
          Ryan Milligan
        </Text3D>
      </Center>
    </>
  );
};
