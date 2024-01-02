const Button = {
  variants: {
    ghost: {
      color: "primary.300",
      fontWeight: 400,
      _hover: {
        background: "background.200",
        boxShadow: `0 0 4px var(--chakra-colors-background-400) inset`,
      },
      _active: {
        background: "background.300",
        boxShadow: `0 0 4px var(--chakra-colors-background-500) inset`,
      },
    },
  },
};

export default Button;
