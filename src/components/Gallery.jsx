import React from "react";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

const Gallery = () => {
  // Example gallery images (replace with your actual images)
  const images = [
    { img: "/assets/gallery/1.jpeg", title: "Community Planting Trees" },
    { img: "/assets/gallery/2.jpeg", title: "Lush Green Forest" },
    { img: "/assets/gallery/3.jpeg", title: "Clean Water Project" },
    { img: "/assets/gallery/4.jpg", title: "School Greening Initiative" },
    { img: "/assets/gallery/5.jpg", title: "Community Workshop" },
    { img: "/assets/gallery/6.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/7.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/8.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/9.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/10.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/11.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/12.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/13.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/14.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/15.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/16.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/17.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/18.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/19.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/20.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/21.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/22.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/23.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/24.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/25.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/26.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/27.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/28.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/29.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/30.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/31.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/32.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/33.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/34.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/35.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/36.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/37.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/38.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/39.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/40.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/41.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/42.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/43.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/44.mp4", title: "Tree Planting Event" },
    { img: "/assets/gallery/45.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/46.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/47.jpeg", title: "Tree Planting Event" },
    { img: "/assets/gallery/48.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/49.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/50.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/51.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/52.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/53.jpg", title: "Tree Planting Event" },
    { img: "/assets/gallery/54.jpg", title: "Tree Planting Event" },
  ];

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9fafb" }}>
      {/* <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: 4 }}
      >
        Our Gallery
      </Typography> */}
      <ImageList variant="masonry" cols={4} gap={8}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={image.img}
              alt={image.title}
              loading="lazy"
              style={{ borderRadius: 8 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
