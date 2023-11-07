import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button } from '@/components/dom/gui/Button';
import { Card } from '@/components/dom/card/Card';
import { ContactLinks } from '@/components/dom/ContactLinks';
import { trpc } from '@/helpers/trpc/trpc';
import Link from 'next/link';
import { Common, View } from '@/components/canvas/scene/View';
import { Name3D } from '@/components/canvas/Name3D';
import { PerspectiveCamera, Sphere } from '@react-three/drei';
import { MainScene } from '@/components/canvas/scene/MainScene';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });
  return (
    <main
      className={`grid h-full w-full grid-cols-1 place-items-center items-center justify-start gap-8 px-24 pb-24 pt-16 font-sans`}
    >
      <View className='h-96 w-screen border-2 border-red-500 ' orbit>
        <MainScene />
      </View>

      <div className='container mx-auto mb-32 flex w-fit min-w-fit justify-between gap-8  border-2 border-transparent text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <Card href={'/projects'} heading='Projects' description='' />

        <Card href={'/skills'} heading='Skills' description='' />
      </div>

      <ContactLinks />
    </main>
  );
}
