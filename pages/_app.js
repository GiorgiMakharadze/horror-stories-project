import "../styles/globals.scss";
import Layout from "../components/Layout/layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  );
}
