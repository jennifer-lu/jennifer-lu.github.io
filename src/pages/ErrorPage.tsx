import { useNavigate } from "react-router-dom";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

import PageWrapper from "../components/PageWrapper";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Box height="calc(40vh - 128px)" />
      <Text>Error 404:</Text>
      <Text>Oops! This page couldn't be found.</Text>
      <Button
        variant="ghost"
        onClick={() => navigate("/")}
        rightIcon={
          <Icon as={FaAngleRight} boxSize="16px" color="primary.300"></Icon>
        }
      >
        Go to the homepage
      </Button>
    </PageWrapper>
  );
};

export default ErrorPage;
