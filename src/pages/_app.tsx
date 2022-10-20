import type { AppProps } from "next/app";
import Layout from "../common/components/page-layout/Layout";
import GlobalStyle from "../app/globalStyles/globals";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../public/styles/Table.css";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <ToastContainer position="top-right" />
        </SessionProvider>
      </Layout>
    </>
  );
}

export default MyApp;
