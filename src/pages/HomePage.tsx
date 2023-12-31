import { Box, Text } from "@chakra-ui/react";

import PageWrapper from "../components/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <Box height="calc(40vh - 128px)" />
      <Text>Hi, I'm Jennifer.</Text>
      <Text>I like making things. Here are</Text>
      <Text>some things that I've made.</Text>
    </PageWrapper>
  );
};

export default HomePage;
