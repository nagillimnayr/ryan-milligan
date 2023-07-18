'use client';
import { cn } from '@/lib/cn';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import RippleEffect from './RippleEffect';

const buttonVariants = cva(
    [
        clsx(
            'group',
            'border border-b-4',
            'm-0',
            'aspect-[1.618]',
            'font-semibold font-sans',
            'rounded-md',
            'flex flex-row items-center justify-center',
            'transition-colors',
            'select-none whitespace-nowrap',
            'relative overflow-hidden' // for ripple effect
        ),
    ],
    {
        variants: {
            variant: {
                default: [
                    'bg-background text-foreground',

                    'hover:bg-accent/80  hover:text-accent-foreground',
                ],
                primary: [
                    'bg-primary text-primary-foreground',
                    'hover:bg-primary-hover',
                ],
                secondary: [
                    'bg-button-secondary text-button-secondary-foreground',
                    'hover:bg-button-secondary-focus ',
                ],
            },
            size: {
                default: [clsx('min-w-24', 'px-4', 'py-2')],
                small: [clsx('text-sm', 'px-2', 'py-1')],
                medium: [clsx('text-base', 'px-4', 'py-2')],
                large: [clsx('text-lg', 'px-6', 'py-3')],
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
        {
            children,
            className,
            variant,
            size,
            asChild = false,
            onClick,
            ...props
        },
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
