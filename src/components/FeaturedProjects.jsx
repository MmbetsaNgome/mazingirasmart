import React from "react";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Tree Planting at In Heaven’s Eyes Children's Center",
      description:
        "In partnership with the Royal Lance Charity Foundation, we engaged in planting 400 trees, focusing on enhancing the local ecosystem and providing environmental education.",
      image: "/assets/projects/plant.jpg",
    },
    {
      id: 2,
      title: "Nyeri Town Clean Up Day",
      description:
        "This event was held during The Nyeri Town Clean Up Day in conjunction with the County Goverment of Nyeri and the Nyeri Diaspora Leadership Academy NDLA.",
      image: "/assets/projects/empower.jpeg",
    },
    {
      id: 3,
      title: "EcoEmpower Initiative | Total Rehab Center,",
      description:
        "Visited and donated food and sanitary items to Total Rehab Center, Kasarani that caters for children suffering from different disorders including cerebral palsy.",
      image: "/assets/projects/eco.jpeg",
    },
    {
      id: 4,
      title: "Tuzisort Kismart",
      description:
        "Working with self-help groups and community based organizations in plastic, glass and scrap metal collection and facilitating transportation to collection points..",
      image: "/assets/projects/tent.jpeg",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {/* <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
