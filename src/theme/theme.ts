import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/Button";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import ModalCloseButton from "./components/ModalCloseButton";

const theme = extendTheme({
  colors,
  semanticTokens: {
    colors: {
      background: {
        100: { default: "light.100", _dark: "dark.500" },
        200: { default: "light.200", _dark: "dark.400" },
        300: { default: "light.300", _dark: "dark.300" },
        400: { default: "light.400", _dark: "dark.200" },
        500: { default: "light.500", _dark: "dark.100" },
      },
      backgroundAlpha: {
        500: { default: "lightAlpha.500", _dark: "darkAlpha.500" },
      },
      primary: {
        300: { default: "dark.100", _dark: "light.500" },
      },
    },
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  fonts: {
    body: `"Poppins"`,
    heading: `"Poppins"`,
  },
  styles: {
    global: {
      body: {
        background: "background.100",
        color: "primary.300",
        _select: {
          background: "yellow",
        },
      },
    },
  },
  components: {
    Button,
    Menu,
    Modal,
    ModalCloseButton,
  },
});

export default theme;
