import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import appTheme from "src/theme/index";
import { Provider as JotaiProvider } from "jotai";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <JotaiProvider>
      <ChakraProvider theme={appTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </JotaiProvider>
  );
};

export default App;
