import PhotoAlbum, { Photo } from "react-photo-album";
import { Box } from "@chakra-ui/react";

import GalleryImage from "./GalleryImage";

type GalleryProps = {
  images: Photo[];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Box width="100%" height="100%" padding="16px 48px 48px 48px">
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
          <GalleryImage key={src} src={src} alt={alt} style={style} {...rest} />
        )}
      />
    </Box>
  );
};

export default Gallery;
