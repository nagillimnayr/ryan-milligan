import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType, type NextPage } from 'next';
import { useMemo } from 'react';
import { PageData, getAllPagesFromDir } from '@/lib/mdx/getPageData';
import PageListItem from '@/components/page-list/PageListItem';
import { cn } from '@/lib/cn';

const icons = [
    'i-tabler:3d-cube-sphere',
    'i-tabler:alpha',
    'i-tabler:ankh',
    'i-tabler:ampersand',
    'i-tabler:api-app',
    'i-tabler:aperture',
    'i-tabler:assembly',
    'i-tabler:atom',
    'i-tabler:atom-2',
    'i-tabler:atom-2-filled',
    'i-tabler:augmented-reality',
    'i-tabler:ball-football',
    'i-tabler:beta',
    'i-tabler:bleach-no-chlorine',
    'i-tabler:bolt',
    'i-tabler:box',
    'i-tabler:cell',
    'i-tabler:cards',
    'i-tabler:cell-signal-1',
    'i-tabler:chart-donut-2',
    'i-tabler:chart-donut-3',
    'i-tabler:chart-donut-4',
    'i-tabler:chart-circles',
    'i-tabler:circles',
    'i-tabler:circles-filled',
    'i-tabler:circle-triangle',
    'i-tabler:circles-relation',
    'i-tabler:circle-filled',
    'i-tabler:circle-square',
    'i-tabler:cube',
    'i-tabler:delta',
    'i-tabler:diamonds',
    'i-tabler:diamonds-filled',
    'i-tabler:frustum',
    'i-tabler:geometry',
    'i-tabler:gizmo',
    'i-tabler:hierarchy',
    'i-tabler:hexagon',
    'i-tabler:hexagons',
    'i-tabler:hierarchy-2',
    'i-tabler:planet',
    'i-tabler:topology-ring',
    'i-tabler:topology-ring-2',
    'i-tabler:triangle',
    'i-tabler:triangle-filled',
    'i-tabler:triangle-inverted',
    'i-tabler:triangle-inverted-filled',
    'i-ion:cube',
    'i-ion:cube-outline',
    'i-ion:cube-sharp',
    'i-ion:dice',
    'i-ion:dice-outline',
    'i-ion:ios-planet',
    'i-ion:md-planet',
    'i-ion:md-rocket',
    'i-ion:planet',
    'i-ion:planet-outline',
    'i-ion:planet-sharp',
    'i-ion:rocket',
    'i-ion:rocket-outline',
    'i-ion:rocket-sharp',
    'i-ion:shapes',
    'i-ion:shapes-outline',
    'i-ion:shapes-sharp',
    'i-ion:skull',
    'i-ion:skull-sharp',
    'i-ion:triangle',
    'i-ion:triangle-outline',
    'i-ion:triangle-sharp',
    'i-iconoir:3d-add-hole',
    'i-iconoir:3d-ellipse',
    'i-iconoir:3d-select-edge',
    'i-iconoir:3d-select-face',
    'i-iconoir:3d-select-point',
    'i-iconoir:3d-select-solid',
    'i-iconoir:3d-arc',
    'i-iconoir:ar-symbol',
    'i-iconoir:hexagon-dice',
    'i-iconoir:heptagon',
    'i-iconoir:inclination',
    'i-iconoir:planet',
    'i-iconoir:planet-alt',
    'i-iconoir:rhombus',
    'i-iconoir:sigma-function',
    'i-iconoir:sweep-3d',
    'i-iconoir:sphere',
    'i-iconoir:triangle',
    'i-iconoir:union-alt',
    'i-iconoir:union-horiz-alt',
    'i-iconoir:xray-view',
    'i-carbon:circle-packing',
    'i-carbon:chart-bubble-packed',
    'i-carbon:chart-ring',
    'i-carbon:cube',
    'i-carbon:cube-view',
    'i-carbon:data-categorical',
    'i-carbon:data-regular',
    'i-carbon:gamification',
    'i-carbon:sigma',
    'i-eos-icons:installing',
    'i-eos-icons:compass',
    'i-eos-icons:atom-electron',
    'i-eos-icons:rotating-gear',
    'i-streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy',
    'i-streamline:programming-module-cube-code-module-programming-plugin',
    'i-svg-spinners:180-ring',
    'i-svg-spinners:blocks-shuffle-2',
    'i-svg-spinners:blocks-shuffle-3',
    'i-svg-spinners:blocks-wave',
    'i-svg-spinners:bouncing-ball',
    'i-svg-spinners:clock',
    'i-svg-spinners:dot-revolve',
    'i-svg-spinners:gooey-balls-2',
    'i-svg-spinners:pulse',
    'i-svg-spinners:90-ring-with-bg',
    'i-lucide:flame',
    'i-logos:nextjs-icon',
    'i-file-icons:prisma',
    'i-logos:prisma',
    'i-arcticons:2050',
    'i-arcticons:3d-collection',
    'i-arcticons:2048',
    'i-arcticons:3d-calculator',
    'i-arcticons:abnto',
    'i-arcticons:abnto',
    'i-arcticons:activity-manager',
    'i-arcticons:activity-zone',
    'i-arcticons:ai-gallery',
    'i-arcticons:appstract',
    'i-arcticons:cubesolver',
    'i-mdi:arrow-projectile',
    'i-mdi:arrow-projectile-multiple',
    'i-mdi:at',
    'i-mdi:atom',
    'i-mdi:atom-variant',
    'i-mdi:axe-battle',
    'i-mdi:axe',
    'i-mdi:baguette',
    'i-mdi:blender-software',
    'i-mdi:beta',
    'i-mdi:bomb',
    'i-mdi:bow-arrow',
    'i-mdi:calculator',
    'i-mdi:delta',
    'i-mdi:epsilon',
    'i-mdi:gamma',
    'i-mdi:roman-numeral-9',
    'i-mdi:lambda',
    'i-mdi:math-compass',
    'i-mdi:function',
    'i-mdi:pi',
    'i-eos-icons:abstract-incomplete',
    'i-',
    'i-',
    'i-',
    'i-',
    'i-',
    'i-',
    'i-',
];

const Page = () => {
    return (
        <>
            <Head>
                <title>Icon Stuff</title>
                <meta name="description" content="" />
                <link
                    rel="icon"
                    type="image/favicon"
                    href="/favicon/lightmode/favicon.svg"
                />
                <link rel="icon" type="favicon" href="/favicon.ico" />
            </Head>

            <section className="prose mx-auto mt-4 flex w-full flex-col items-center justify-start font-sans text-foreground prose-headings:text-foreground">
                <h1 className="border-2">Icon Stuff</h1>
                <div className="flex w-full flex-wrap justify-start gap-4 rounded-lg border-2 p-4 ">
                    {icons.map((icon, index) => {
                        return (
                            <div
                                key={index}
                                className="flex h-fit w-fit flex-col items-center justify-center rounded-md border-2 p-6"
                            >
                                <div className={cn('h-24 w-24', icon)} />
                                <label>{icon}</label>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Page;
