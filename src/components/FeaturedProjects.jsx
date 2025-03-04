import React from "react";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Tree Nurseries, Seedlings and Saplings",
      description:
        "Mazingira Smart NGO empowers communities through environmental conservation initiatives, working specifically with youth and women's groups to establish and maintain tree nurseries. Through these projects, we provide valuable training in horticulture, entrepreneurship, and sustainability, enhancing participants' employability while fostering a long-term commitment to environmental conservation. ",
      image: "/assets/gallery/39.jpg",
    },
    {
      id: 2,
      title: "Tree Planting and Growing",
      description:
        "At Mazingira Smart, we are passionate about transforming communities through sustainable tree planting and growing initiatives. Our projects focus on empowering local residents to take ownership of their environment by establishing thriving tree nurseries and promoting reforestation efforts. We plant diverse range of native species to enhance biodiversity but also contribute to cleaner air, healthier ecosystems, and stronger community bonds. We also plant fruit trees to supplement income and for nutrition provision",
      image: "/assets/projects/planting.jpeg",
    },
    // {
    //   id: 3,
    //   title: "EcoEmpower Initiative | Total Rehab Center,",
    //   description:
    //     "Visited and donated food and sanitary items to Total Rehab Center, Kasarani that caters for children suffering from different disorders including cerebral palsy.",
    //   image: "/assets/projects/eco.jpeg",
    // },
    // {
    //   id: 4,
    //   title: "Tuzisort Kismart",
    //   description:
    //     "Working with self-help groups and community based organizations in plastic, glass and scrap metal collection and facilitating transportation to collection points..",
    //   image: "/assets/projects/tent.jpeg",
    // },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  <Link to="/projects">Learn More</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
