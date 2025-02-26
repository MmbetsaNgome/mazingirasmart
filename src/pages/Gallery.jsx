import React from "react";
import Gallery from "../components/Gallery";
import PageHero from "../components/PageHero";

const GalleryPage = () => {
  return (
    <div className="py-12">
      <PageHero
        title="Gallery"
        subtitle="Take a peek at some of our past activities"
        backgroundImage="/assets/gallery/39.jpg"
      />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
