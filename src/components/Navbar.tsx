import { useNavigate } from "react-router-dom";
import { Button, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      width="100%"
      height="72px"
      position="fixed"
      padding="16px 32px"
      align="center"
      justifyContent="space-between"
      gap="16px"
      zIndex="100"
      bg="background.100"
    >
      <Button variant="ghost" onClick={() => navigate("/")}>
        <Heading as="h3" size="md">
          JENNIFER LU
        </Heading>
      </Button>
      <Spacer />
      <HStack spacing="8px">
        <Button variant="ghost" onClick={() => navigate("/paintings")}>
          Paintings
        </Button>
        <Button variant="ghost" onClick={() => navigate("/photos")}>
          Photos
        </Button>
        <Button variant="ghost" onClick={() => navigate("/objects")}>
          Objects
        </Button>
        <Button
          as="a"
          href="https://www.linkedin.com/in/-jennifer/"
          target="_blank"
          variant="ghost"
        >
          LinkedIn
        </Button>
        <Button
          as="a"
          href="https://github.com/jennifer-lu"
          target="_blank"
          variant="ghost"
        >
          GitHub
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
