import "../styles/globals.scss";
import Layout from "../components/navbar/Layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
