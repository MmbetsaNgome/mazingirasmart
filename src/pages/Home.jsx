import React from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Goals from "../components/Goals";
// import Mission from "../components/Mission";
import ImpactHighlights from "../components/ImpactHighlights";
import FeaturedProjects from "../components/FeaturedProjects";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Goals />
      {/* <Mission /> */}
      <ImpactHighlights />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
};

export default Home;
