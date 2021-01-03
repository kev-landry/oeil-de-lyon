import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import useFirestore from 'hooks/useFirestore';

export default function Home() {
  const { docs } = useFirestore("photos");
  console.log('index -', docs);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main>
        <Header title="Oeil de Lyon 👋" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <p>{process.env.NEXT_PUBLIC_API_KEY}</p>
      </main>

      <Footer />
    </div>
  );
}
