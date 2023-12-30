import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import PageWrapper from "../components/PageWrapper";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Box height="calc(40vh - 128px)" />
      <Text>Error 404</Text>
      <Text>Oops! The page you're looking for</Text>
      <Flex align="center" gap="8px">
        <Text>wasn't found...</Text>
        <Button variant="ghost" onClick={() => navigate("/")}>
          Back to home
        </Button>
      </Flex>
    </PageWrapper>
  );
};

export default ErrorPage;
