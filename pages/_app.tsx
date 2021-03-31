import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import appTheme from "src/theme/index";
import { Provider as JotaiProvider } from "jotai";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
      </Head>
      <JotaiProvider>
        <ChakraProvider theme={appTheme}>
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
      </JotaiProvider>
    </>
  );
};

export default App;
