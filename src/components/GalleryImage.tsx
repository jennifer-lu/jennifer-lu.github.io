import { useState } from "react";
import { RenderPhotoProps } from "react-photo-album";
import { Box, Flex, Image, Skeleton } from "@chakra-ui/react";

type GalleryImageProps = {
  imageIndex: number;
  setImageIndex: (imageIndex: number) => void;
  onOpen: () => void;
} & RenderPhotoProps["imageProps"];

const GalleryImage = ({
  imageIndex,
  setImageIndex,
  onOpen,
  src,
  alt,
  style,
  ...rest
}: GalleryImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      style={style}
      position="relative"
      borderRadius="8px"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{
        transform: "scale(0.98)",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
      onClick={() => {
        setImageIndex(imageIndex);
        onOpen();
      }}
    >
      {!loaded && (
        <Skeleton
          width="100%"
          height="100%"
          startColor="background.200"
          endColor="background.500"
        />
      )}
      <Flex position="relative">
        <Image
          loading="lazy"
          src={src}
          alt={alt}
          {...rest}
          onLoad={() => setLoaded(true)}
          zIndex={2}
        />
        <Flex
          position="absolute"
          width="100%"
          height="100%"
          background="background.500"
          borderRadius="8px"
        />
      </Flex>
    </Box>
  );
};

export default GalleryImage;
