import React from "react";
import { Grid2, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Gallery = () => {
  // Example gallery images (replace with your actual images)
  const images = [
    {
      id: 1,
      src: "../assets/gallery/1.jpeg",
      alt: "Community Planting Trees",
      description: "Community Planting Trees",
    },
    {
      id: 2,
      src: "../assets/gallery/2.jpeg",
      alt: "Lush Green Forest",
      description: "Lush Green Forest",
    },
    {
      id: 3,
      src: "../assets/gallery/3.jpeg",
      alt: "Clean Water Project",
      description: "Clean Water Project",
    },
    {
      id: 4,
      src: "../assets/gallery/4.jpg",
      alt: "School Greening Initiative",
      description: "School Greening Initiative",
    },
    {
      id: 5,
      src: "../assets/gallery/5.jpg",
      alt: "Community Workshop",
      description: "Community Workshop",
    },
    {
      id: 6,
      src: "../assets/gallery/6.jpg",
      alt: "Tree Planting Event",
      description: "Tree Planting Event",
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Gallery
      </Typography>
      <Grid2 container spacing={4}>
        {images.map((image) => (
          <Grid2 item key={image.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image.src}
                alt={image.alt}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default Gallery;
