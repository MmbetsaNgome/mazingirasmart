import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/assets/logo.png" // Path to your logo
                alt="Mazingira Smart Logo"
                className="h-30 mr-2 bg-white"
              />
              {/* <span className="text-xl font-bold">Mazingira Smart</span> */}
            </div>
            <p className="text-sm text-gray-300">
              Conserving our environment together.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-gray-300 space-y-2">
              <li>Email: info@mazingirasmart.org </li>
              <li>Phone: +254 725 952 484 / +254 791 831 939 </li>
              <li>
                Address: Arch Business Centre Eastern Bypass 3rd floor B8,
                Nairobi ,Kenya
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Mazingira-Smart/61559026688877/"
                target="_blank"
                className="text-gray-300 hover:text-green-400"
              >
                Facebook
              </a>
              <a
                href="https://x.com/mazingirasmart"
                target="_blank"
                className="text-gray-300 hover:text-green-400"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/mazingirasmart/"
                target="_blank"
                className="text-gray-300 hover:text-green-400"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/mazingira-smart-kenya-ngo-11a233320?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B25XGgV1fStyD2zIqZ1h7Eg%3D%3D"
                target="_blank"
                className="text-gray-300 hover:text-green-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>© {currentYear} Mazingira Smart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
