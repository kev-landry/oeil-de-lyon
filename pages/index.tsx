import Head from 'next/head';
import Image from 'next/image'

import Header from 'components/Header';
import Footer from 'components/Footer';
// import useFirestore from 'hooks/useFirestore';
import useStorage from 'hooks/useStorage';

export default function Home() {
  // const { docs } = useFirestore("photos");
  const { photos } = useStorage();
  // console.log('index -', photos);
  return (
    <div className="container">
      <Head>
        <title>Oeil de Lyon 👀</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main>
        <Header title="Oeil de Lyon 👋" />
        <p className="description">
          Random photos i made in <code>Lyon</code>
        </p>
      </main>
      <section style={{ marginTop: 50 }}>
        {photos && photos.map((photo) => (
          // <img src={photo.url} alt="" width="250" key={photo.name} />
          <Image src={photo.url} alt="" width={400} height={450} key={photo.name} quality={100} layout="responsive" />
        )
        )}
      </section>
      <Footer />
    </div>
  );
}
