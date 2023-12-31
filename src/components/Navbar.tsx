import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

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
      padding="16px 32px"
      align="center"
      justifyContent="space-between"
      gap="16px"
      zIndex="100"
      bg="background.100"
      boxShadow={scrolled ? "lg" : "none"}
      transition="box-shadow 0.3s ease-in-out"
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
    </Flex>
  );
};

export default Navbar;
