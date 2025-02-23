import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">Mazingira Smart</h3>
          <p className="mt-2">
            Empowering communities through sustainable practices.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-green-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/impact" className="hover:text-green-400">
                Impact
              </a>
            </li>
            <li>
              <a href="/get-involved" className="hover:text-green-400">
                Get Involved
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p className="mt-2">Email: info@mazingirasmart.org</p>
          <p>Phone: +254 700 000 000</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-green-400">
              Facebook
            </a>
            <a href="#" className="hover:text-green-400">
              Twitter
            </a>
            <a href="#" className="hover:text-green-400">
              Instagram
            </a>
            <a href="#" className="hover:text-green-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
