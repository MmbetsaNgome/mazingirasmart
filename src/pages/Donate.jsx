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
              Get involved and make a difference! Join us as a volunteer in our
              tree planting efforts to help restore the environment, reduce
              carbon footprints, and create a greener, healthier planet. Whether
              you're planting your first tree or you're an experienced
              volunteer, every effort counts. Together, we can create a lasting
              impact and a brighter future. Sign up today and be part of the
              change!
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              <a href="/contact">Volunteer Now</a>
            </button>
          </div>

          {/* Partner Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-4">
              Join us in making a lasting impact on our planet through tree
              planting! By partnering with us, you can help restore ecosystems,
              combat climate change, and create greener communities. Together,
              we can plant the seeds for a sustainable future. Let's grow a
              better world, one tree at a time.Kindly reach out to us.
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
