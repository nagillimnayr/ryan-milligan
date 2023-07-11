'client component';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import React, { useCallback } from 'react';

const buttonVariants = cva(
    [
        'border border-b-8',
        'font-semibold font-sans',
        'rounded-md',
        'flex flex-row items-center justify-center',
        'transition-colors',
        'select-none',
        'relative overflow-hidden', // for ripple effect
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
                    'hover:bg-button-primary-focus/50',
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

        const handleClick = useCallback(
            (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                const button = event.currentTarget;
                const diameter = Math.max(
                    button.clientWidth,
                    button.clientHeight
                );
                const radius = diameter / 2;
                const circle = React.createElement('span', { className: '' });

                // if an onClick event handler was passed to us, call it and pass the mouse event object to it
                if (onClick) onClick(event);
            },
            [onClick]
        );
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                onClick={handleClick}
                {...props}
            >
                {children}
                <span className="absolute aspect-square w-full scale-0 rounded-full bg-white/100 transition-all hover:animate-ripple active:animate-ripple" />
            </Comp>
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
