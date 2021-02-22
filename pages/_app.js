import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import appTheme from "src/theme/index";
import { Provider as JotaiProvider } from "jotai";

const App = ({ Component, pageProps }) => {
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
