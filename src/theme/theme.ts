import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  fonts: {
    body: `"Special Elite"`,
    heading: `"Special Elite"`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#f9f9f7", "#282828")(props),
        color: mode("#282828", "#f9f9f7")(props),
      },
    }),
  },
});

export default theme;
