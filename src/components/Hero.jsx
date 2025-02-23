import React from "react";
import { Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <div
      className="relative h-[700px] md:h-vh w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('../assets/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 "></div> */}

      {/* Content */}
      <div className="relative z-10">
        <Typography
          variant="h2"
          component="h1"
          className="text-5xl font-bold mb-4"
        >
          Greening Communities, Transforming Lives
        </Typography>
        <Typography variant="h5" className="text-xl mb-8">
          Empowering communities through sustainable practices and tree-planting
          initiatives.
        </Typography>
        <div className="space-x-4">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-green-600 hover:bg-green-700"
          >
            Get Involved
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            className="text-white border-white hover:bg-white hover:text-green-800"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
