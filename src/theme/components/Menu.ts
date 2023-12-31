import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    bg: "background.200",
    border: "none",
  },
  item: {
    color: "primary.300",
    bg: "background.200",
    _hover: {
      bg: "background.300",
    },
    _focus: {
      bg: "background.400",
    },
    _active: {
      bg: "background.400",
    },
  },
});

const Menu = defineMultiStyleConfig({ baseStyle });

export default Menu;
