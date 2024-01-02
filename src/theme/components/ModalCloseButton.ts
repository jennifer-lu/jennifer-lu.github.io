const ModalCloseButton = {
  baseStyle: {
    color: "primary.300",
    fontWeight: 400,
    _hover: {
      background: "red",
      boxShadow: `0 0 4px var(--chakra-colors-background-400) inset`,
    },
    _active: {
      background: "background.300",
      boxShadow: `0 0 4px var(--chakra-colors-background-500) inset`,
    },
  },
};

export default ModalCloseButton;
