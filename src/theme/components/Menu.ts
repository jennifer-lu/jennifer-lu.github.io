import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    background: "background.200",
    border: "none",
  },
  item: {
    color: "primary.300",
    background: "background.200",
    _hover: {
      background: "background.300",
      boxShadow: `0 0 4px var(--chakra-colors-background-500) inset`,
    },
    _focus: {
      background: "background.300",
      boxShadow: `0 0 4px var(--chakra-colors-background-500) inset`,
    },
    _active: {
      background: "background.400",
      boxShadow: `0 0 4px var(--chakra-colors-background-500) inset`,
    },
  },
});

const Menu = defineMultiStyleConfig({ baseStyle });

export default Menu;
