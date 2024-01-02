import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const images = [
  {
    src: "images/photos/IMG_0002.jpeg",
    width: 3024,
    height: 4032,
    alt: "Central Park; May 2023",
  },
  {
    src: "images/photos/IMG_0003.jpeg",
    width: 4032,
    height: 3024,
    alt: "Central Park; May 2023",
  },
  {
    src: "images/photos/IMG_0011.jpeg",
    width: 4032,
    height: 3024,
    alt: "72nd St; May 2023",
  },
  {
    src: "images/photos/IMG_0609.jpeg",
    width: 4032,
    height: 3024,
    alt: "The High Line; June 2023",
  },
  {
    src: "images/photos/IMG_1408.jpeg",
    width: 4032,
    height: 3024,
    alt: "Beacon; May 2023",
  },
  {
    src: "images/photos/IMG_1409.jpeg",
    width: 3024,
    height: 4032,
    alt: "Beacon; February 2023",
  },
  {
    src: "images/photos/IMG_4898.jpeg",
    width: 4032,
    height: 3024,
    alt: "Cessy; December 2023",
  },
  {
    src: "images/photos/IMG_8889.jpeg",
    width: 4032,
    height: 3024,
    alt: "Sutro Baths; February 2023",
  },
  {
    src: "images/photos/IMG_8896.jpeg",
    width: 4032,
    height: 3024,
    alt: "Sutro Baths; February 2023",
  },
  {
    src: "images/photos/IMG_8902.jpeg",
    width: 3024,
    height: 4032,
    alt: "Sutro Baths; February 2023",
  },
  {
    src: "images/photos/IMG_9145.jpeg",
    width: 4032,
    height: 3024,
    alt: "University of Waterloo; April 2023",
    originalSrc: "images/photos/IMG_0011.jpeg",
  },
];

const PhotosPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default PhotosPage;
