import { cn } from '@/helpers/cn';

const numCols = 4;
const numRows = 4;

const Page = () => {
    return (
        <div
            className={cn(
                'container absolute left-1/2 top-1/2 m-4 h-[800px] -translate-x-1/2 -translate-y-1/2  rounded-lg border-2 border-neutral-500 p-1 ',
                'grid grid-cols-4 grid-rows-3 gap-4'
            )}
        >
            {[...Array<number>(8)].map((x, i) => {
                return (
                    <div
                        key={i}
                        className="m-0 flex items-center justify-center rounded-sm border-2 bg-indigo-500 p-0"
                    >
                        <h2 className="text-center font-sans text-2xl">
                            {i + 1}
                        </h2>
                    </div>
                );
            })}
            <div className="col-start-1 col-end-[-1] row-start-1 row-end-2 flex items-center justify-center bg-indigo-500">
                <h2 className="text-center font-sans text-3xl">Header</h2>
            </div>
        </div>
    );
};

export default Page;
