import Head from "next/head";
import Hero from "../components/home-page/hero";

function HomePage() {
  return (
    <>
      <Head>
        <title>Stories</title>
        <meta name="description" content="Find a lot of great horror stories" />
      </Head>
      <Hero />
    </>
  );
}

export default HomePage;
