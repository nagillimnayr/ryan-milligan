import { type Object3DProps } from '@react-three/fiber';

export type ClassNameProp = {
  className?: string;
};
export type CommonProps = ClassNameProp & {
  children?: React.ReactNode;
};

export type LinkProps = CommonProps & {
  href: string;
};

export type ObjectProps = Pick<
  Object3DProps,
  'position' | 'rotation' | 'scale'
>;
