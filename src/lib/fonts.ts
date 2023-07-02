import { 
  Roboto, Roboto_Flex, Roboto_Mono, Roboto_Condensed, Roboto_Slab, Roboto_Serif, Orbitron, Atkinson_Hyperlegible, Audiowide, Bruno_Ace, Bruno_Ace_SC, MuseoModerno, Iceland
} from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
    weight: '400',
    variable: '--font-roboto',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
    weight: '400',
    variable: '--font-roboto-mono',
});


export const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-condensed',
});

export const roboto_flex = Roboto_Flex({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-flex',
});

export const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-slab',
});

export const roboto_serif = Roboto_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-serif',
});

export const iceland = Iceland({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-',
})

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-orbitron',
})
export const atkinson_hyperlegible = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-atkinson-hyperlegible',
})
export const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-museoModerno',
})
