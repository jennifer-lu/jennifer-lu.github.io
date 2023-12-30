import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./pages/HomePage";
import theme from "./theme/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
