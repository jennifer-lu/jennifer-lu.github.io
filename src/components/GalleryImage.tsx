import { useState } from "react";
import { RenderPhotoProps } from "react-photo-album";
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

const GalleryImage = ({
  src,
  alt,
  style,
  ...rest
}: RenderPhotoProps["imageProps"]) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box style={style} position="relative" borderRadius="8px" overflow="hidden">
      {loaded ? (
        <Box
          width="100%"
          height="100%"
          position="absolute"
          zIndex="3"
          backdropFilter="blur(16px)"
          opacity="0"
          transition="opacity 0.3s"
          _hover={{
            opacity: 1,
          }}
        >
          <Box width="100%" height="100%" bg="background.100" opacity="0.8">
            <Flex
              width="100%"
              height="100%"
              padding="32px 40px"
              direction="column"
              justifyContent="flex-end"
              gap="4px"
            >
              {alt.split("; ").map((text) => {
                return <Text key={`${src}-${text}`}>{text}</Text>;
              })}
            </Flex>
          </Box>
        </Box>
      ) : (
        <Skeleton
          width="100%"
          height="100%"
          startColor="background.200"
          endColor="background.500"
        />
      )}
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        {...rest}
        onLoad={() => setLoaded(true)}
      />
    </Box>
  );
};

export default GalleryImage;
