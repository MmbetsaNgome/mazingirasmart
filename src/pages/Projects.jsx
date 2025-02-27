import React from "react";

import PageHero from "../components/PageHero";
import { Box, Grid2, Typography, Button } from "@mui/material";

const Impact = () => {
  const projects = [
    // {
    //   id: 1,
    //   title: "Tree Nurseries, Seedlings and Saplings",
    //   description: `Mazingira Smart NGO is dedicated to empowering local communities through collaborative environmental initiatives. The organization works closely with youth and women groups to establish and maintain tree nurseries, fostering a sense of responsibility towards environmental conservation.
    //     The projects provide them with valuable skills in horticulture, entrepreneurship, and sustainability. This not only enhances their employability but also instills a long-term commitment to preserving natural resources.The partnership with women's groups is equally impactful, offering economic opportunities through nursery management. Women acquire skills in cultivating high-quality seedlings that can be sold or used locally, contributing significantly to community development while supporting gender equality. The establishment of these nurseries benefits the community on multiple fronts: they promote biodiversity by focusing on native species, generate income from seedling sales, and provide practical knowledge in sustainable forestry practices. Through this collaborative model, Mazingira Smart aims to create lasting impacts on both local economies and ecosystems.`,
    //   image: "/assets/gallery/39.jpg",
    //   link: "/projects/urban-greening",
    // },
    {
      id: 2,
      title: "Ecoempower initiative",
      description:
        "Visited and donated food and sanitary items to Total Rehab Center, Kasarani that caters for children suffering from different disorders including cerebral palsy.-Nyeri Town Clean Up Day in conjunction with the County Government of Nyeri and the Nyeri Diaspora Leadership Academy NDLA.",
      image: "/assets/projects/ecoempower.jpeg",
      link: "/projects/clean-water",
    },
    {
      id: 3,
      title: "Mazingira smart and innovation clubs",
      description:
        " - Establishing Mazingira Smart Clubs in primary and secondary schools in Nairobi, Kiambu, Nyeri and Muranga Counties.- Collaborating with vocational training colleges and universities in Nairobi, Nyeri, Kiambu and Muranga counties to establish Mazingira Smart Innovation Club (MASIC). The nnovations clubs promote skills and knowledge acquisition in green technology and entrepreneurship.",
      image: "/assets/projects/innovation.jpeg",
      link: "/projects/school-greening",
    },
    {
      id: 4,
      title: "Tuzisort kismart",
      description:
        "- Working with self-help groups and community based organizations in plastic, glass and scrap metal collection and facilitating transportation to collection points.- Establishing Mazingira Smart Waste Collection and Recycling Centers.",
      image: "/assets/projects/tent.jpeg",
      link: "/projects/community-tree-planting",
    },
    // {
    //   id: 5,
    //   title: "Tree Planting and Growing",
    //   description:
    //     "At Mazingira Smart, we are passionate about transforming communities through sustainable tree planting and growing initiatives. Our projects focus on empowering local residents to take ownership of their environment by establishing thriving tree nurseries and promoting reforestation efforts. We plant diverse range of native species to enhance biodiversity but also contribute to cleaner air, healthier ecosystems, and stronger community bonds. We also plant fruit trees to supplement income and for nutrition provision. Some of our projects include the following;",
    //   image: "/assets/projects/planting.jpeg",
    //   link: "/projects/urban-greening",
    // },
  ];
  const stats = [
    // { id: 1, value: "10,000+", label: "Trees Planted" },
    // { id: 2, value: "50+", label: "Communities Empowered" },
    // { id: 3, value: "100,000+", label: "Lives Impacted" },
    {
      id: 1,
      value: " 5,200",
      label:
        "   indigenous trees and fruit trees at Ngandu Junior School in November 2023     ",
    },
    {
      id: 2,
      value: "5,000 ",
      label:
        "  indigenous and fruit trees in Kaigonde Primary & Junior School in December 2023.",
    },
    {
      id: 3,
      value: "5,400 ",
      label:
        "  indigenous trees at Heavens Eye Children Centre Nyahururu, Laikipia County.",
    },
    { id: 4, value: "9,700 ", label: "  trees in Mt Elgon in October 2023" },
    { id: 5, value: "3,100 ", label: "  fruits trees in Nyeri in March 2024" },
    {
      id: 6,
      value: "5,600 ",
      label: "  indigenous trees in Laikipia County in May 2024",
    },
    {
      id: 7,
      value: "3,200 ",
      label: "  macadamia fruit trees in Nyeri County in July 2024",
    },
    {
      id: 8,
      value: "10,000",
      label: "   indigenous trees in Makueni County in July",
    },
    { id: 9, value: "9,400 ", label: "  in Thika Kiambu County in Sept 2024" },
    {
      id: 10,
      value: " 5,500",
      label:
        "   indigenous and fruit trees in Kiambu County during environment day.",
    },
    {
      id: 11,
      value: " 5,700",
      label: "   indigenous in Kiambu County in Sept 2023.",
    },
    {
      id: 12,
      value: " 3,300",
      label: "   fruit trees in Makueni County in July 2023.",
    },
    {
      id: 13,
      value: " 5,500",
      label: "   indigenous trees in Thogoto Teachers College in November 2024",
    },
    {
      id: 14,
      value: " 6,500",
      label: "   indigenous trees in Nairobi County in Dec 2024.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Mazingira Smart has transformed our community. The air is cleaner, and our children are healthier.",
      author: "Jane Doe, Community Leader",
    },
    {
      id: 2,
      quote:
        "Thanks to the Clean Water Project, we now have access to safe drinking water.",
      author: "John Smith, Beneficiary",
    },
  ];

  return (
    <div className="bg-white py-12">
      <PageHero
        title="Our Projects"
        subtitle="Discover our ongoing and past initiatives."
        backgroundImage="/assets/back.jpg"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>

        {/* Project Sections */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md  md:mb-10 overflow-hidden">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6}`}>
              {/* Image */}
              <div className="p-6">
                <img
                  src="/assets/gallery/39.jpg"
                  alt="Tree Nurseries, Seedlings and Saplings"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Tree Nurseries, Seedlings and Saplings
                </h3>
                <p className="text-gray-600 mb-6">
                  Mazingira Smart NGO is dedicated to empowering local
                  communities through collaborative environmental initiatives.
                  The organization works closely with youth and women groups to
                  establish and maintain tree nurseries, fostering a sense of
                  responsibility towards environmental conservation.
                  <br />
                  <br />
                  The projects provide them with valuable skills in
                  horticulture, entrepreneurship, and sustainability. This not
                  only enhances their employability but also instills a
                  long-term commitment to preserving natural resources.The
                  partnership with women's groups is equally impactful, offering
                  economic opportunities through nursery management. Women
                  acquire skills in cultivating high-quality seedlings that can
                  be sold or used locally, contributing significantly to
                  community development while supporting gender equality.
                  <br />
                  <br />
                  The establishment of these nurseries benefits the community on
                  multiple fronts: they promote biodiversity by focusing on
                  native species, generate income from seedling sales, and
                  provide practical knowledge in sustainable forestry practices.
                  Through this collaborative model, Mazingira Smart aims to
                  create lasting impacts on both local economies and ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              > */}
                {/* Image */}
                {/* <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div> */}

                {/* Text Content */}
                {/* <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p> */}
                  {/* <a
                    href={project.link}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 text-center md:text-left"
                  >
                    Learn More
                  </a> */}
                {/* </div>
              </div>
            </div>
          ))} */}

          <div className="bg-white rounded-lg shadow-md  md:mb-10 overflow-hidden">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6}`}>
              {/* Image */}
              <div className="p-6">
                <img
                  src="/assets/projects/planting.jpeg"
                  alt="Tree Nurseries, Seedlings and Saplings"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Tree Planting and Growing
                </h3>
                <p className="text-gray-600 mb-6">
                  At Mazingira Smart, we are passionate about transforming
                  communities through sustainable tree planting and growing
                  initiatives. Our projects focus on empowering local residents
                  to take ownership of their environment by establishing
                  thriving tree nurseries and promoting reforestation efforts.
                  We plant diverse range of native species to enhance
                  biodiversity but also contribute to cleaner air, healthier
                  ecosystems, and stronger community bonds. We also plant fruit
                  trees to supplement income and for nutrition provision. Some
                  of our projects include the following;
                </p>
              </div>
            </div>
            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:mt-8 gap-8 mb-12 p-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
                >
                  <p className="text-4xl font-bold text-green-600">
                    {stat.value}
                  </p>
                  <p className="text-xl text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-semibold mt-4">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Impact;
