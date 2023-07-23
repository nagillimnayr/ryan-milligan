import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';
import RippleEffect from '../gui/RippleEffect';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center m-0 rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring duration-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110 overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'bg-button-primary text-button-primary-foreground hover:bg-button-primary-focus border-border',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary border-2 border-border',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant, size, asChild = false, onClick, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {children}
        {/* <RippleEffect /> */}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { buttonVariants, Button };
