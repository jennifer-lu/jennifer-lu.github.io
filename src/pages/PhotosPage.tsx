import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const images = [
  {
    src: "images/photos/IMG_4898.jpeg",
    width: 4032,
    height: 3024,
    alt: "Cessy, France; December 2023",
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
];

const PhotosPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default PhotosPage;
