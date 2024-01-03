import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const images = [
  {
    src: "images/photos/cessy_og.jpeg",
    width: 4032,
    height: 3024,
    alt: "Cessy, France; December 2023",
  },
];

const ObjectsPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default ObjectsPage;
