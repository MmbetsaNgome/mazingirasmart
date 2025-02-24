import React from "react";

import PageHero from "../components/PageHero";

const Impact = () => {
  const stats = [
    { id: 1, value: "10,000+", label: "Trees Planted" },
    { id: 2, value: "50+", label: "Communities Empowered" },
    { id: 3, value: "100,000+", label: "Lives Impacted" },
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

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <p className="text-4xl font-bold text-green-600">{stat.value}</p>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </div>
  );
};

export default Impact;
