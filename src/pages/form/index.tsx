import TestForm from '@/components/form/TestForm';
import TextInputForm from '@/components/form/TextInputForm';
import PageLayout from '@/components/layout/page-layout/PageLayout';

const TestPage = () => {
    return (
        <PageLayout title="Test Form Page">
            <section className="container h-96 rounded-lg border-2">
                <header className="">
                    <h2>Form Test</h2>
                </header>
                <TextInputForm />
            </section>
        </PageLayout>
    );
};

export default TestPage;
