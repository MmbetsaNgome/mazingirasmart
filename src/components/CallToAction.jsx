import React from "react";

const CallToAction = () => {
  return (
    <div
      className="relative py-20 text-center text-white"
      style={{
        backgroundImage: "url('/assets/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Join Us in Building a Sustainable Future
        </h2>
        <p className="text-xl mb-8">
          Your support can make a difference. Get involved today!
        </p>
        <div className="space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            <a href="/donate">Donate</a>
          </button>
          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-green-800">
            <a href="/contact">Partner With Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
