import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const imageData = [
  {
    src: "images/photos/sutro_1.jpg",
    width: 4032,
    height: 3024,
    alt: "Sutro Baths; iPhone 13 — February 2023",
    otherSrc: "images/photos/sutro_1_og.jpeg",
  },
  {
    src: "images/photos/central_2.jpg",
    width: 3024,
    height: 4032,
    alt: "Central Park; iPhone 13 — May 2023",
    otherSrc: "images/photos/central_2_og.jpeg",
  },
  {
    src: "images/photos/beacon_1.jpg",
    width: 4032,
    height: 3024,
    alt: "Beacon; iPhone 13 — May 2023",
    otherSrc: "images/photos/beacon_1_og.jpeg",
  },
  {
    src: "images/photos/central_1.jpg",
    width: 4032,
    height: 3024,
    alt: "Central Park; iPhone 13 — May 2023",
    otherSrc: "images/photos/central_1_og.jpeg",
  },
  {
    src: "images/photos/highline_og.jpeg",
    width: 4032,
    height: 3024,
    alt: "The High Line; iPhone 13 — June 2023",
  },
  {
    src: "images/photos/sutro_2.jpg",
    width: 3024,
    height: 4032,
    alt: "Sutro Baths; iPhone 13 — February 2023",
    otherSrc: "images/photos/sutro_2_og.jpeg",
  },
  {
    src: "images/photos/cessy.jpg",
    width: 4032,
    height: 3024,
    alt: "Cessy; iPhone 13 — December 2023",
    otherSrc: "images/photos/cessy_og.jpeg",
  },
  {
    src: "images/photos/beacon_2.jpg",
    width: 3024,
    height: 4032,
    alt: "Beacon; iPhone 13 — February 2023",
    otherSrc: "images/photos/beacon_2_og.jpeg",
  },
  //   {
  //     src: "images/photos/uw.jpeg",
  //     width: 4032,
  //     height: 3024,
  //     alt: "University of Waterloo; iPhone 13 — April 2023",
  //     otherSrc: "images/photos/uw_og.jpeg",
  //   },
];

const images = imageData.map((imageDatum) => ({
  ...imageDatum,
  srcType: "edited",
  otherSrcType: "original",
}));

const PhotosPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default PhotosPage;
