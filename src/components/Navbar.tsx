import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import NavMenu from "./NavMenu";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const { colorMode } = useColorMode();

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <Flex
      as="header"
      width="100%"
      height="72px"
      position="fixed"
      padding="16px 40px 16px 32px"
      align="center"
      justifyContent="space-between"
      gap="16px"
      zIndex="100"
      bg="background.100"
      boxShadow={scrolled ? (colorMode === "light" ? "lg" : "dark-lg") : "none"}
      transition="box-shadow 0.3s ease-in-out"
    >
      <Button as="a" href="/" variant="ghost">
        <Heading as="h3" size="md">
          JENNIFER LU
        </Heading>
      </Button>
      <Spacer />
      <HStack display={{ base: "none", md: "flex" }} spacing="8px">
        <Button as="a" href="/paintings" variant="ghost">
          Paintings
        </Button>
        <Button as="a" href="/photos" variant="ghost">
          Photos
        </Button>
        <Button as="a" href="/objects" variant="ghost">
          Objects
        </Button>
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/-jennifer/"
          target="_blank"
          aria-label="LinkedIn"
          variant="ghost"
          icon={<Icon as={FaLinkedin} boxSize="16px" color="primary.300" />}
        ></IconButton>
        <IconButton
          as="a"
          href="https://github.com/jennifer-lu"
          target="_blank"
          aria-label="GitHub"
          variant="ghost"
          icon={<Icon as={FaGithub} boxSize="16px" color="primary.300" />}
        ></IconButton>
      </HStack>
      <Flex display={{ base: "flex", md: "none" }}>
        <NavMenu />
      </Flex>
    </Flex>
  );
};

export default NavBar;
