import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
    title: 'CSS Stuff',
};

const Page: NextPage = () => {
    return (
        <main>
            <header>
                <h1>CSS Stuff</h1>
            </header>

            <section>
                <header>
                    <h1>Lorem, ipsum.</h1>
                </header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum sint officia perspiciatis vitae ex consequatur
                    quam! Magnam dolores eos molestiae voluptatibus accusantium
                    soluta. Non sequi dolor perspiciatis! Corrupti, doloremque
                    veritatis.
                </p>
            </section>
        </main>
    );
};
