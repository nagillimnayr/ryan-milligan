import { Center, Text3D } from '@react-three/drei';

export const Name3D = function Name3D() {


  const fontURL = 'fonts/Roboto_Regular.json';
  return(
    <>
    <Center>
      <Text3D
      font={fontURL} letterSpacing={0.15}>Ryan Milligan</Text3D>
      </Center>
    </>
  )
}
