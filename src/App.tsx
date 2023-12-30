import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import theme from "./theme/theme";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/paintings",
      element: <HomePage />,
    },
    {
      path: "/photos",
      element: <HomePage />,
    },
    {
      path: "/objects",
      element: <HomePage />,
    },
  ]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
