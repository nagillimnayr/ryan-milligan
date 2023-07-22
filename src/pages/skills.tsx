import { cn } from '@/lib/cn';
import { ClassNameValue } from 'tailwind-merge';

const skills = [
  {
    name: 'Typescript',
    icon: 'icon-[devicon--typescript]',
  },
  {
    name: 'HTML5',
    icon: 'icon-[devicon--html5]',
  },
  {
    name: 'CSS3',
    icon: 'icon-[devicon--css3]',
  },
  {
    name: 'React',
    icon: 'icon-[devicon--react]',
  },
  {
    name: 'Next.js',
    icon: 'rounded-full icon-[devicon--nextjs] dark:text-white dark:rounded-full',
  },
  {
    name: 'Node.js',
    icon: 'icon-[devicon--nodejs]',
  },
  {
    name: 'Tailwind',
    icon: 'icon-[devicon--tailwindcss]',
  },
  {
    name: 'C++',
    icon: 'icon-[devicon--cplusplus]',
  },
  {
    name: 'C#',
    icon: 'icon-[devicon--csharp]',
  },
  {
    name: 'Python',
    icon: 'icon-[devicon--python]',
  },
  {
    name: 'OpenGL',
    icon: 'icon-[devicon--opengl]',
  },
  {
    name: 'WebGL',
    icon: 'icon-[file-icons--webgl]',
  },
  {
    name: 'Three.js',
    icon: 'icon-[devicon--threejs-wordmark]',
  },
  {
    name: 'Git',
    icon: 'icon-[devicon--git]',
  },
  {
    name: 'LaTeX',
    icon: 'icon-[devicon--latex]',
  },
  {
    name: 'Markdown',
    icon: 'icon-[devicon--markdown]',
  },
  {
    name: 'Rider',
    icon: 'icon-[devicon--rider]',
  },
  {
    name: 'SDL',
    icon: 'icon-[devicon--sdl]',
  },
  {
    name: 'Unity',
    icon: 'icon-[devicon--unity-wordmark]',
  },
  {
    name: 'Unreal Engine',
    icon: 'icon-[devicon--unrealengine-wordmark]',
  },
];
export default function Page() {
  return (
    <section className="container prose flex h-full w-full  flex-col items-center justify-start font-sans prose-headings:my-0">
      <header className="my-8">
        <h2 className="text-4xl">My Skills</h2>
      </header>
      <div className="grid h-96 w-[48rem] grid-cols-7 grid-rows-3 gap-4 rounded-lg border bg-slate-600 p-4">
        {skills.map((skill) => {
          return (
            <span
              key={skill.name}
              className={cn(
                'h-full w-full transition-all duration-300 hover:scale-110',
                skill.icon
              )}
            />
          );
        })}
      </div>
    </section>
  );
}

type Props = {
  className: ClassNameValue;
};
const Skill = ({ className }: Props) => {
  return (
    <div>
      <span className={cn('transition-all ', className)} />
    </div>
  );
};
