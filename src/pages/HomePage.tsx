import { Center, Flex, Icon, Text, useToken } from "@chakra-ui/react";

import PageWrapper from "../components/PageWrapper";

const HomePage = () => {
  return (
    <PageWrapper>
      <Center
        height="calc(100vh - 72px)"
        width="100vw"
        position="relative"
        overflow="hidden"
      >
        <Icon position="absolute" boxSize="768px" viewBox="0 -0.5 33 33">
          <svg>
            <defs>
              <filter id="seal-inner-shadow">
                <feFlood floodColor={useToken("colors", "background.400")} />
                <feComposite operator="out" in2="SourceGraphic" />
                <feGaussianBlur stdDeviation="0.2" />
                <feComposite operator="atop" in2="SourceGraphic" />
              </filter>
            </defs>
            <path
              stroke={useToken("colors", "background.200")}
              filter="url(#seal-inner-shadow)"
              d="M1 1h31M1 2h1M31 2h1M1 3h1M3 3h1M5 3h11M23 3h1M31 3h1M1 4h1M3 4h1M5 4h1M7 4h1M17 4h13M31 4h1M1 5h1M3 5h1M5 5h1M7 5h9M17 5h1M29 5h1M31 5h1M1 6h1M3 6h1M5 6h1M17 6h1M21 6h1M25 6h1M29 6h1M31 6h1M1 7h1M3 7h13M17 7h1M19 7h3M25 7h3M29 7h1M31 7h1M1 8h1M5 8h1M15 8h1M17 8h1M19 8h1M27 8h1M29 8h1M31 8h1M1 9h1M3 9h11M15 9h1M17 9h1M19 9h1M27 9h1M29 9h1M31 9h1M1 10h1M3 10h1M5 10h1M15 10h1M17 10h1M19 10h1M21 10h1M25 10h1M27 10h1M29 10h1M31 10h1M1 11h1M3 11h1M5 11h9M15 11h1M17 11h1M19 11h3M25 11h3M29 11h1M31 11h1M1 12h1M3 12h1M9 12h1M15 12h1M17 12h1M21 12h5M29 12h1M31 12h1M1 13h1M3 13h1M5 13h1M9 13h1M13 13h1M15 13h1M17 13h1M21 13h1M29 13h1M31 13h1M1 14h1M3 14h1M5 14h1M7 14h5M13 14h1M15 14h1M17 14h1M19 14h1M21 14h5M27 14h1M29 14h1M31 14h1M1 15h1M3 15h1M5 15h1M9 15h1M13 15h1M15 15h1M17 15h1M19 15h1M27 15h1M29 15h1M31 15h1M1 16h1M3 16h1M5 16h1M9 16h1M13 16h1M15 16h1M17 16h1M19 16h9M29 16h1M31 16h1M1 17h1M3 17h1M5 17h1M7 17h5M13 17h1M15 17h1M17 17h1M20 17h1M22 17h1M24 17h1M26 17h1M29 17h1M31 17h1M1 18h1M3 18h1M5 18h1M13 18h1M15 18h1M17 18h1M20 18h1M22 18h1M24 18h1M26 18h1M29 18h1M31 18h1M1 19h1M3 19h1M5 19h3M11 19h3M15 19h1M17 19h1M20 19h1M22 19h1M24 19h1M26 19h1M29 19h1M31 19h1M1 20h1M3 20h1M7 20h1M11 20h1M15 20h1M17 20h1M19 20h2M22 20h1M24 20h1M26 20h2M29 20h1M31 20h1M1 21h1M3 21h1M5 21h1M7 21h5M13 21h1M15 21h1M17 21h1M22 21h1M24 21h1M29 21h1M31 21h1M1 22h1M3 22h1M5 22h1M13 22h1M15 22h1M17 22h1M19 22h9M29 22h1M31 22h1M1 23h1M3 23h1M5 23h9M15 23h1M17 23h1M29 23h1M31 23h1M1 24h1M3 24h1M6 24h1M8 24h1M10 24h1M12 24h1M15 24h1M17 24h1M19 24h9M29 24h1M31 24h1M1 25h1M3 25h1M6 25h1M8 25h1M10 25h1M12 25h1M15 25h1M17 25h1M25 25h1M29 25h1M31 25h1M1 26h1M3 26h1M6 26h1M8 26h1M10 26h1M12 26h1M15 26h1M17 26h1M25 26h1M29 26h1M31 26h1M1 27h1M3 27h1M5 27h2M8 27h1M10 27h1M12 27h2M15 27h1M17 27h1M25 27h1M29 27h1M31 27h1M1 28h1M3 28h1M8 28h1M10 28h1M15 28h1M17 28h1M25 28h1M29 28h1M31 28h1M1 29h1M3 29h1M5 29h9M15 29h1M17 29h1M19 29h7M29 29h1M31 29h1M1 30h1M31 30h1M1 31h31"
            />
          </svg>
        </Icon>
        <Flex direction="column" align="center" gap="16px" zIndex="2">
          <Text>Hi, I'm Jennifer.</Text>
          <Text>I like making things. Here are</Text>
          <Text>some things that I've made.</Text>
        </Flex>
      </Center>
    </PageWrapper>
  );
};

export default HomePage;
