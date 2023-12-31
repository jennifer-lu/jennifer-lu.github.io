import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import NavBar from "./NavBar";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      <NavBar />
      <Flex
        as="main"
        height="100%"
        width="100%"
        marginTop="72px"
        direction="column"
        align="center"
        gap="32px"
        overflow="auto"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default PageWrapper;
