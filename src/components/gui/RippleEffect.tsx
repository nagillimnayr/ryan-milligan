'use client';
import { PropsWithChildren, useCallback, useRef } from 'react';

const RippleEffect = ({ children }: PropsWithChildren) => {
    const rippleRef = useRef<HTMLSpanElement>(null!);
    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const container = event.currentTarget;
            // get mouse position relative to element
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const diameter = Math.max(rect.width, rect.height);

            const ripple = rippleRef.current;
            // set the css variables for center of ripple
            ripple.style.setProperty('--pos-x', `${x}px`);
            ripple.style.setProperty('--pos-y', `${y}px`);

            // set size of ripple
            ripple.style.setProperty('width', `${diameter}px`);
            ripple.style.setProperty('height', `${diameter}px`);

            const parent = container.parentElement;
            if (parent) {
                // get the text color of the parent element
                const computedStyles = window.getComputedStyle(parent);
                const foregroundColor = computedStyles.color;
                console.log('foreground color:', foregroundColor);
                // set the color of the ripple so that it is visible over its parent
                ripple.style.setProperty('backgroundColor', foregroundColor);
            }

            // Create ripple animation
            // translate must be declared here, otherwise it will be overridden by the animation. We could declare left and top here as well, and not need to worry about the CSS variables.
            const keyframes = [
                {
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: '50%',
                },
                {
                    transform: 'translate(-50%, -50%) scale(2)',
                    opacity: '0%',
                },
            ];
            const timing = {
                duration: 800,
                iterations: 1,
            };

            ripple.animate(keyframes, timing);
        },
        []
    );
    return (
        <>
            {/** --pos-x and --pos-y will be inherited by the inner span element */}
            <div
                onClick={handleClick}
                className="absolute left-0 top-0 m-0 inline-flex h-full w-full items-center justify-center overflow-hidden border-transparent bg-transparent p-0 [--pos-x:0%] [--pos-y:0%]"
            >
                {/** --pos-x and --pos-y can then be used to position the top-left of the element relative to its parent. These CSS variables will be set to the mouse position when the button is clicked so that the center of the ripple appears where the user clicks. */}
                <span
                    ref={rippleRef}
                    className="absolute left-[var(--pos-x)] top-[var(--pos-y)] aspect-square h-8 w-8 scale-0 rounded-full bg-white p-0 opacity-0"
                />
                {/* {children} */}
            </div>
        </>
    );
};

export default RippleEffect;
