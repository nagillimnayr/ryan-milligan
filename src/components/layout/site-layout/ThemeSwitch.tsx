import { Switch } from '@/components/ui/switch';
import { IconSwitch } from '@/components/ui/switch-icon';
import { cn } from '@/lib/utils';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useTheme } from 'next-themes';

type ThemeSwitchProps = {
    className?: string;
};
const ThemeSwitch = (props: ThemeSwitchProps) => {
    const { setTheme } = useTheme();
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleChangeChecked = useCallback((checked: boolean) => {
        setDarkMode(checked);
    }, []);

    // set theme
    darkMode ? setTheme('dark') : setTheme('light');

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
                {darkMode ? <MoonIcon size={24} /> : <SunIcon size={24} />}
            </IconSwitch>
        </div>
    );
};

export default ThemeSwitch;
