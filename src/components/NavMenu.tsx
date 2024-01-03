import { Link } from "react-router-dom";
import {
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

const NavMenu = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        variant="ghost"
        icon={<FaBars />}
      />
      <MenuList>
        <Link to="/paintings">
          <MenuItem>Paintings</MenuItem>
        </Link>
        <Link to="/photos">
          <MenuItem>Photos</MenuItem>
        </Link>
        <Link to="/objects">
          <MenuItem>Objects</MenuItem>
        </Link>
        <MenuItem
          as="a"
          href="https://www.linkedin.com/in/-jennifer/"
          target="_blank"
        >
          <Flex width="100%" align="center" justifyContent="space-between">
            <Text>LinkedIn</Text>
            <Icon as={FaLinkedin} boxSize="16px" color="primary.300" />
          </Flex>
        </MenuItem>
        <MenuItem as="a" href="https://github.com/jennifer-lu" target="_blank">
          <Flex width="100%" align="center" justifyContent="space-between">
            <Text>GitHub</Text>
            <Icon as={FaGithub} boxSize="16px" color="primary.300" />
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
