import FSTestForm from '@/components/forms/FSTestForm';
import TestForm from '@/components/forms/TestForm';
import TextInputForm from '@/components/forms/TextInputForm';
import PageLayout from '@/components/layout/page-layout/PageLayout';

const TestPage = () => {
    return (
        <PageLayout title="Test Form Page">
            <section
                border="2"
                rounded="md"
                className="flex-start container flex h-fit w-96 min-w-fit flex-col items-center gap-4 py-10"
            >
                <header
                    border="2"
                    rounded="md"
                    hover="bg-gray-400/20"
                    className="flex w-full min-w-fit flex-col items-center justify-start p-2 text-center"
                >
                    <h2 border="2" p="2" m="0" rounded="md">
                        Save To File Test
                    </h2>
                </header>
                <FSTestForm className="w-96 rounded-md border-2 p-2" />
            </section>
        </PageLayout>
    );
};

export default TestPage;
