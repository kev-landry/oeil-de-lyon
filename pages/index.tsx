import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import useFirestore from 'hooks/useFirestore';
import useStorage from 'hooks/useStorage';

export default function Home() {
  // const { docs } = useFirestore("photos");
  const { photos } = useStorage();
  console.log('index -', photos);
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
          Random photos i made in <code>Lyon</code>
        </p>
      </main>
      <div style={{ marginTop: 50 }}>
        {photos && photos.map((photo) => (
          <img src={photo} alt="" width="250" />
        )
        )}
      </div>
      <Footer />
    </div>
  );
}
