import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
    [
        'border',
        'font-semibold',
        'rounded-md',
        'font-sans',
        'flex flex-row items-center justify-center',
    ],
    {
        variants: {
            variant: {
                default: [
                    'bg-background text-foreground',
                    'hover:bg-accent/80  hover:text-accent-foreground',
                ],
                primary: [
                    'bg-button-primary text-button-primary-foreground',
                    'hover:bg-button-primary-focus',
                ],
                secondary: [
                    'bg-button-secondary text-button-secondary-foreground',
                    'hover:bg-button-secondary-focus ',
                ],
            },
            size: {
                default: ['h-12', 'px-4', 'py-2'],
                small: ['text-sm', 'px-2', 'py-1'],
                medium: ['text-base', 'px-4', 'py-2'],
                large: ['text-lg', 'px-6', 'py-3'],
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
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
