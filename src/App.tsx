import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import theme from "./theme/theme";
import HomePage from "./pages/HomePage";
import PaintingsPage from "./pages/PaintingsPage";
import PhotosPage from "./pages/PhotosPage";
import ObjectsPage from "./pages/ObjectsPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/paintings",
      element: <PaintingsPage />,
    },
    {
      path: "/photos",
      element: <PhotosPage />,
    },
    {
      path: "/objects",
      element: <ObjectsPage />,
    },
    { path: "*", element: <ErrorPage /> },
  ]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
