import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex>
      <Navbar />
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
