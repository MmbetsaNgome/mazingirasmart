import React, { useState } from "react";
import PageHero from "../components/PageHero";

const Donate = ({ isModalOpen, openModal, closeModal }) => {
  return (
    <div className="bg-gray-50 py-12">
      <PageHero
        title="Get Involved"
        subtitle="Join us in building a sustainable future."
        backgroundImage="/assets/gallery/39.jpg"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donate Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <p className="text-gray-600 mb-4">
              Your donation helps us plant trees, provide clean water, and
              empower communities.
            </p>
            <button
              onClick={openModal}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Donate Now
            </button>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Join our team and make a difference in your community.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              <a href="/contact">Volunteer Now</a>
            </button>
          </div>

          {/* Partner Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-4">
              Collaborate with us to create sustainable solutions.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              <a href="/contact">Partner Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
