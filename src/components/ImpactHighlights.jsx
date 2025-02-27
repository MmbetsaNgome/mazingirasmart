import React from "react";

const ImpactHighlights = () => {
  const highlights = [
    {
      icon: "🌳",
      title: "100,000 Trees Planted",
      description: "Helping to restore green spaces in communities.",
    },
    {
      icon: "👥",
      title: "50 Communities Empowered",
      description: "Engaging local communities in sustainability efforts.",
    },
    {
      icon: "💧",
      title: "10,000 Lives Impacted",
      description: "Improving lives through environmental initiatives.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactHighlights;
