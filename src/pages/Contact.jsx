import React from "react";
import PageHero from "../components/PageHero";

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you."
        backgroundImage="/assets/back.jpg"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Have questions or want to get involved? Reach out to us!
            </p>
            <ul className="text-gray-600">
              <li className="mb-2">Email: info@mazingirasmart.org</li>
              <li className="mb-2">Phone: +254 700 000 000</li>
              <li className="mb-2">
                Address: 123 Green Street, Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
