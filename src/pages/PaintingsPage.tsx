import Gallery from "../components/Gallery";
import PageWrapper from "../components/PageWrapper";

const images = [
  {
    src: "images/paintings/mom.jpg",
    width: 2681,
    height: 2669,
    alt: "Mom; Oil on Panel — December 2023",
  },
  {
    src: "images/paintings/eye.jpg",
    width: 3356,
    height: 2733,
    alt: "Eye; MS Paint — August 2021",
  },
  {
    src: "images/paintings/fremont.jpg",
    width: 2511,
    height: 2525,
    alt: "Fremont; Acrylic on Panel — September 2023",
  },
];

const PaintingsPage = () => {
  return (
    <PageWrapper>
      <Gallery images={images} />
    </PageWrapper>
  );
};

export default PaintingsPage;
