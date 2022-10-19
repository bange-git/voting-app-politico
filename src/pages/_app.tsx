import type { AppProps } from "next/app";
import Layout from "../common/components/page-layout/Layout";
import GlobalStyle from "../app/globalStyles/globals";
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <>
      <GlobalStyle />
      <Layout>
         <SessionProvider session={session}>
           <Component {...pageProps} />
         </SessionProvider>
      </Layout>
    </>
  );
}

export default MyApp;
