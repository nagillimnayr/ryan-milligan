import { cn } from '@/lib/utils';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    example: string;
    exampleRequired: string;
};

type FormProps = {
    className?: string;
};
const TextInputForm = ({ className }: FormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(data);
        alert(JSON.stringify(data));
    };

    console.log(watch('example')); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
                'flex h-fit w-fit flex-col items-center justify-start gap-4',
                className
            )}
        >
            {/* register your input into the hook by invoking the "register" function */}
            <input
                className="w-full rounded-md border-2 px-2"
                placeholder="test"
                defaultValue={''}
                {...register('example', { required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <textarea
                className="w-full rounded-md border-2 px-2"
                {...register('exampleRequired', { required: true })}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
                type="submit"
                className="rounded-md border-2 bg-button-primary px-2 text-button-primary-foreground hover:bg-button-primary/80"
            />
        </form>
    );
};

export default TextInputForm;
