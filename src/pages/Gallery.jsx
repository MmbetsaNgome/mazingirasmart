import React from "react";
import Gallery from "../components/Gallery";
import PageHero from "../components/PageHero";

const GalleryPage = () => {
  return (
    <div className="py-12">
      <PageHero
        title="Gallery"
        subtitle="Learn more about our mission, vision, and team."
        backgroundImage="/assets/back.jpg"
      />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
