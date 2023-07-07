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
                <header flex="col" border="2" className="items-center">
                    <h2>Form Test</h2>
                </header>
                <TextInputForm />
            </section>
        </PageLayout>
    );
};

export default TestPage;
