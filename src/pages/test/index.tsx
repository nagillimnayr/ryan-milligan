import { View } from '@/components/canvas/scene/View';
import { TestScene } from '@/components/canvas/scene/test-scene/TestScene';

export default function Page() {
  return (
    <main
      className={`m-0 flex h-full w-full flex-col items-center justify-center p-0 font-sans`}
    >
      <View className='h-full w-full border-2 '>
        <TestScene />
      </View>
    </main>
  );
}
