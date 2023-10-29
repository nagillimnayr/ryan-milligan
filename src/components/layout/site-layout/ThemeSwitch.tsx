import { IconSwitch } from '@/components/ui/switch-icon';
import { cn } from '@/helpers/cn';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type ThemeSwitchProps = {
    className?: string;
};
const ThemeSwitch = (props: ThemeSwitchProps) => {
    const { theme, setTheme } = useTheme();
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        setDarkMode(theme === 'dark' ?? false);
    }, [theme]);

    const handleChangeChecked = useCallback(
        (checked: boolean) => {
            setDarkMode(checked);
            if (checked) {
                setTheme('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                setTheme('light');
                localStorage.setItem('theme', 'light');
            }
        },
        [setTheme]
    );

    return (
        <div
            className={cn(
                'flex h-fit w-fit items-center justify-center',
                props.className
            )}
        >
            <IconSwitch
                checked={darkMode}
                onCheckedChange={handleChangeChecked}
            >
                <div
                    data-theme={darkMode ? 'dark' : 'light'}
                    className="icon-[line-md--moon-filled-to-sunny-filled-loop-transition] h-full w-full rounded-full border-2 data-[theme=dark]:icon-[line-md--sunny-filled-loop-to-moon-filled-loop-transition]"
                />
            </IconSwitch>
        </div>
    );
};

export default ThemeSwitch;
