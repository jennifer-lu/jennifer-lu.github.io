import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const imageData = [
  {
    src: "images/objects/sloths.png",
    width: 2303,
    height: 2160,
    alt: "Sloths; Linoleum — September 2023",
    otherSrc: "images/objects/sloths_print.png",
  },
  {
    src: "images/objects/black_tortoise.png",
    width: 3119,
    height: 2299,
    alt: "Black Tortoise; Linoleum — October 2023",
    otherSrc: "images/objects/black_tortoise_print.png",
  },
  {
    src: "images/objects/seal.png",
    width: 1298,
    height: 1298,
    alt: "Seal; Linoleum — October 2023",
    otherSrc: "images/objects/seal_print.png",
  },
  //   {
  //     src: "images/objects/chinese_garden.png",
  //     width: 2930,
  //     height: 2291,
  //     alt: "Chinese Garden; Lego — December 2020",
  //   },
  //   {
  //     src: "images/objects/empire_state.png",
  //     width: 2981,
  //     height: 3427,
  //     alt: "Empire State; Lego — January 2022",
  //   },
];

const images = imageData.map((imageDatum) =>
  imageDatum.otherSrc
    ? {
        ...imageDatum,
        srcType: "original",
        otherSrcType: "print",
      }
    : imageDatum
);

const ObjectsPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default ObjectsPage;
