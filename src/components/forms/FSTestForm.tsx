'use client';
import { cn } from '@/lib/utils';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';

type FormData = {
    fileName: string;
    contents: string;
};

type FormProps = {
    className?: string;
};
const FSTestForm = ({ className }: FormProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = useCallback(
        async (data: FormData) => {
            console.log(data);
            // alert(JSON.stringify(data));

            // convert data to json format before sending to server
            const jsonData = JSON.stringify(data);

            // API endpoint to send the data to
            const endpoint = '/api/saveToFile';

            // Form the request for sending data to the server.
            const options = {
                // The method is POST because we are sending data.
                method: 'POST',
                // Tell the server we're sending JSON.
                headers: {
                    'Content-Type': 'application/json',
                },
                // Body of the request is the JSON data we created above.
                body: jsonData,
            };

            const response = await fetch(endpoint, options);

            if (response.status === 400) {
                console.log('error 400:');

                console.error('error writing to file');
            } else if (response.status === 400) {
                console.log('success');
            }
        },
        []
    );

    // console.log(watch('fileName')); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
                'flex h-fit w-fit flex-col items-center justify-start gap-4',
                className
            )}
        >
            {/* register your input into the hook by invoking the "register" function */}
            <input
                className="w-full rounded-md border-2 px-2"
                placeholder="file name"
                defaultValue={''}
                {...register('fileName', { required: true })}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <textarea
                placeholder="file contents"
                className="w-full rounded-md border-2 px-2"
                {...register('contents', { required: true })}
            />

            {/* errors will return when field validation fails  */}
            {errors.fileName && <span>This field is required</span>}
            {errors.contents && <span>This field is required</span>}

            <input
                type="submit"
                className="rounded-md border-2 bg-button-primary px-2 text-button-primary-foreground hover:bg-button-primary/80"
            />
        </form>
    );
};

export default FSTestForm;
