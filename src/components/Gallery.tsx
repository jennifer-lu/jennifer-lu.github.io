import PhotoAlbum, { Photo } from "react-photo-album";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

type GalleryProps = {
  images: Photo[];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Box width="100%" height="100%" marginBottom="32px">
      <PhotoAlbum
        photos={images}
        layout="columns"
        spacing={16}
        columns={(containerWidth: number) => {
          if (containerWidth < 800) return 1;
          if (containerWidth < 1600) return 2;
          return 3;
        }}
        renderPhoto={({ imageProps: { src, alt, style, ...rest } }) => (
          <Box
            style={style}
            position="relative"
            borderRadius="8px"
            overflow="hidden"
          >
            <Box
              width="100%"
              height="100%"
              position="absolute"
              zIndex="3"
              backdropFilter="blur(16px)"
              opacity="0"
              transition="opacity 0.5s"
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
                    return <Text>{text}</Text>;
                  })}
                </Flex>
              </Box>
            </Box>
            <Image src={src} alt={alt} {...rest} />
          </Box>
        )}
      />
    </Box>
  );
};

export default Gallery;
