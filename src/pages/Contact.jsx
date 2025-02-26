import React from "react";
import PageHero from "../components/PageHero";

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <PageHero
        title="Contact Us"
        subtitle="We’d love to hear from you."
        backgroundImage="/assets/gallery/39.jpg"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <img src="/assets/map.jpeg" alt="" className="w-full h-auto" />
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Thank you for visiting our website!! Hope that you will stand with
              us as we plant seeds of hope and preserve the trees of life.
              <br />
              <br />
              We hope that the information that you found on this website was
              resourceful.Feel free to visit us anytime, we are more than
              welcome to speak to you over a coffee, or some food.
              <br />
              <br />
              Our organization remains at the forefront of environmental
              stewardship and sustainability initiatives.
            </p>
            <ul className="text-black-900">
              <li className="mb-2">Email: mazingirasmart@gmail.com </li>
              <li className="mb-2">
                Phone: +254 791 831 939 / +254 725 952 484
              </li>
              <li className="mb-2">
                Address: Arch Business Centre Eastern Bypass 3rd floor B8,
                Nairobi ,Kenya
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
