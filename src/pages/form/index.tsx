import TestForm from '@/components/form/TestForm';
import TextInputForm from '@/components/form/TextInputForm';
import PageLayout from '@/components/layout/page-layout/PageLayout';

const TestPage = () => {
    return (
        <PageLayout title="Test Form Page">
            <section
                border="2"
                className="flex-start container flex h-fit w-96 min-w-fit flex-col items-center gap-4 rounded-lg py-10"
            >
                <header
                    border="2"
                    hover="bg-gray-400/20"
                    className="flex w-full min-w-fit flex-col items-center justify-start p-2 text-center"
                >
                    <h2 border="2 white" p="2" m="0">
                        Form Test
                    </h2>
                </header>
                <TextInputForm className="w-96 border-2 p-2" />
            </section>
        </PageLayout>
    );
};

export default TestPage;
