'use client';

import { type PropsWithChildren } from 'react';
import { r3f } from './tunnel';

export const Three = ({ children }: PropsWithChildren) => {
  return <r3f.In>{children}</r3f.In>;
};
