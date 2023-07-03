import { Switch } from "@/components/ui/switch";
import { IconSwitch } from "@/components/ui/switch-icon";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

type ThemeSwitchProps = {
  className?: string;
}
const ThemeSwitch = (props: ThemeSwitchProps) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  return(
    <div className={cn('w-fit h-fit flex justify-center items-center', props.className)}>
    <IconSwitch 
      defaultChecked={enabled}
      checked={enabled}
      onCheckedChange={(checked)=>{setEnabled(checked)}}
      
      >
        {enabled ? <MoonIcon /> : <SunIcon />}
    </IconSwitch>
    </div>
  )
}

export default ThemeSwitch;
