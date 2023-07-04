import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

const IconSwitch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            'peer relative inline-flex h-[26px] w-[--switch-width] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors [--switch-width:48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                'pointer-events-none flex aspect-square h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-border bg-background shadow-lg ring-0 transition-transform',
                'data-[state=checked]:translate-x-[calc(var(--switch-width)-26px)]',
                'data-[state=unchecked]:translate-x-0'
            )}
        >
            {props.children}
        </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
));
IconSwitch.displayName = SwitchPrimitives.Root.displayName;

export { IconSwitch };
