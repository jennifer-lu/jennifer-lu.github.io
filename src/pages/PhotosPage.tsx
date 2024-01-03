import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const images = [
  {
    src: "images/photos/sutro_1.jpg",
    width: 4032,
    height: 3024,
    alt: "Sutro Baths; February 2023",
    originalSrc: "images/photos/sutro_1_og.jpeg",
  },
  {
    src: "images/photos/central_2.jpg",
    width: 3024,
    height: 4032,
    alt: "Central Park; May 2023",
    originalSrc: "images/photos/central_2_og.jpeg",
  },
  {
    src: "images/photos/beacon_1.jpg",
    width: 4032,
    height: 3024,
    alt: "Beacon; May 2023",
    originalSrc: "images/photos/beacon_1_og.jpeg",
  },
  {
    src: "images/photos/cessy.jpg",
    width: 4032,
    height: 3024,
    alt: "Cessy; December 2023",
    originalSrc: "images/photos/cessy_og.jpeg",
  },
  {
    src: "images/photos/highline_og.jpeg",
    width: 4032,
    height: 3024,
    alt: "The High Line; June 2023",
  },
  {
    src: "images/photos/central_1.jpg",
    width: 4032,
    height: 3024,
    alt: "Central Park; May 2023",
    originalSrc: "images/photos/central_1_og.jpeg",
  },
  {
    src: "images/photos/sutro_2.jpg",
    width: 3024,
    height: 4032,
    alt: "Sutro Baths; February 2023",
    originalSrc: "images/photos/sutro_2_og.jpeg",
  },
  {
    src: "images/photos/beacon_2.jpg",
    width: 3024,
    height: 4032,
    alt: "Beacon; February 2023",
    originalSrc: "images/photos/beacon_2_og.jpeg",
  },
  //   {
  //     src: "images/photos/uw.jpeg",
  //     width: 4032,
  //     height: 3024,
  //     alt: "University of Waterloo; April 2023",
  //     originalSrc: "images/photos/uw_og.jpeg",
  //   },
];

const PhotosPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default PhotosPage;
