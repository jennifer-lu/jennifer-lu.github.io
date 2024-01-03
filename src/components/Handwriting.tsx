import { Image, useToken } from "@chakra-ui/react";

type HandwritingProps = {
  src: string;
  alt: string;
  height: string;
};

const Handwriting = ({ src, alt, height }: HandwritingProps) => {
  return (
    <div
      style={{
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskImage: `url(${src})`,
        maskSize: "contain",
        background: useToken("colors", "primary.300"),
      }}
    >
      <Image
        src={src}
        alt={alt}
        maxWidth="calc(100vw - 16px)"
        maxHeight={height}
        opacity={0}
      ></Image>
    </div>
  );
};

export default Handwriting;
