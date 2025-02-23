import React from "react";
import { Typography, Button } from "@mui/material";

const Mission = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
          <Typography
            variant="h3"
            component="h2"
            className="text-3xl font-bold mb-4"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className="text-lg mb-6">
            At Mazingira Smart, we empower communities to take ownership of
            their environment through sustainable practices and tree-planting
            projects.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-green-600 hover:bg-green-700"
          >
            Learn More
          </Button>
        </div>

        {/* Image */}
        <div>
          <img
            src="/assets/welcome.jpg"
            alt="Our Mission"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
