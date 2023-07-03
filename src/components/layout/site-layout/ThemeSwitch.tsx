import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";

type ThemeSwitchProps = {
  className?: string;
}
const ThemeSwitch = (props: ThemeSwitchProps) => {
  const [enabled, setEnabled] = useState<boolean>(false);
  return(
    <div className={cn('w-fit h-fit flex justify-center items-center', props.className)}>

    <Switch 
      checked={enabled}
      onCheckedChange={setEnabled}
      >

    </Switch>
    </div>
  )
}

export default ThemeSwitch;
