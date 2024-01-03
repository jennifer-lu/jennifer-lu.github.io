import { useRef, useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import GalleryImage from "./GalleryImage";

type ImageType = {
  otherSrc?: string;
  srcType?: string;
  otherSrcType?: string;
} & Photo;

type GalleryProps = {
  images: ImageType[];
};

const Gallery = ({ images }: GalleryProps) => {
  const bodyRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [showOther, setShowOther] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    setShowOther(false);
    onClose();
  };

  return (
    <Box width="100%" height="100%" padding="16px 48px 48px 48px">
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        initialFocusRef={bodyRef}
        size="xl"
        isCentered
      >
        <ModalOverlay background="backgroundAlpha.500" />
        <ModalContent
          maxWidth={`min(95vw, calc((97vh - 128px) * ${images[imageIndex].width} / ${images[imageIndex].height}))`}
        >
          <ModalBody ref={bodyRef} padding="8px">
            <Flex justify="flex-end">
              <IconButton
                aria-label="Close"
                variant="ghost"
                icon={<CloseIcon boxSize="12px" color="primary.300" />}
                onClick={handleClose}
              ></IconButton>
            </Flex>
            <Flex direction="column" padding="8px 16px 16px 16px" gap="24px">
              <Flex position="relative">
                {showOther && images[imageIndex].otherSrcType === "print" ? (
                  <Flex position="relative">
                    <Flex
                      style={{
                        WebkitMaskImage: `url(${images[imageIndex].otherSrc})`,
                        WebkitMaskSize: "contain",
                        maskImage: `url(${images[imageIndex].otherSrc})`,
                        maskSize: "contain",
                      }}
                      background="dark.100"
                      zIndex={3}
                    >
                      <Image
                        loading="lazy"
                        src={images[imageIndex].otherSrc}
                        alt={images[imageIndex].alt}
                        opacity={0}
                      />
                    </Flex>
                    <Flex
                      position="absolute"
                      width="100%"
                      height="100%"
                      background="light.500"
                      borderRadius="8px"
                      zIndex={2}
                    />
                  </Flex>
                ) : (
                  <Image
                    loading="lazy"
                    src={
                      showOther
                        ? images[imageIndex].otherSrc
                        : images[imageIndex].src
                    }
                    alt={images[imageIndex].alt}
                    borderRadius="8px"
                    zIndex={2}
                  />
                )}
                <Flex
                  position="absolute"
                  width="100%"
                  height="100%"
                  background="background.500"
                  borderRadius="8px"
                />
              </Flex>
              <Flex align="flex-end" justifyContent="space-between">
                <Flex direction="column" gap="4px">
                  {(images[imageIndex].alt ?? "").split("; ").map((text) => {
                    return (
                      <Text key={`${images[imageIndex].src}-${text}`}>
                        {text}
                      </Text>
                    );
                  })}
                </Flex>
                {images[imageIndex].otherSrc && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowOther(!showOther)}
                  >{`View ${
                    showOther
                      ? images[imageIndex].srcType
                      : images[imageIndex].otherSrcType
                  }`}</Button>
                )}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <PhotoAlbum
        photos={images}
        layout="columns"
        spacing={16}
        columns={(containerWidth: number) => {
          if (containerWidth < 800) return 1;
          if (containerWidth < 1600) return 2;
          return 3;
        }}
        renderPhoto={({
          imageProps: { src, alt, style, ...rest },
          layout: { index },
        }) => (
          <GalleryImage
            key={src}
            imageIndex={index}
            setImageIndex={setImageIndex}
            onOpen={onOpen}
            src={src}
            alt={alt}
            style={style}
            {...rest}
          />
        )}
      />
    </Box>
  );
};

export default Gallery;
