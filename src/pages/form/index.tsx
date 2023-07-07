import TestForm from '@/components/form/TestForm';
import TextInputForm from '@/components/form/TextInputForm';
import PageLayout from '@/components/layout/page-layout/PageLayout';

const TestPage = () => {
    return (
        <PageLayout title="Test Form Page">
            <section
                hover="bg-gray-400/20"
                className="container h-96 items-center rounded-lg "
            >
                <header
                    bg="gray/20"
                    border="1"
                    className="flex flex-col items-center justify-start p-2"
                >
                    <h2 border="2 white" py="2" px="2">
                        Form Test
                    </h2>
                </header>
                <TextInputForm />
            </section>
        </PageLayout>
    );
};

export default TestPage;
