import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
// import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";
// import Give from "./components/Give";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Header openModal={openModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/donate"
          element={
            <Donate
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          }
        />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800">
                Ways to Donate
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Donation Options */}
            <div className="space-y-6">
              {/* Bank Transfer */}
              {/* <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Bank Transfer
                </h3>
                <p className="text-gray-600 mb-4">
                  You can donate directly to our bank account. Here are the
                  details:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800">
                    <strong>Bank Name:</strong> Example Bank
                  </p>
                  <p className="text-gray-800">
                    <strong>Account Name:</strong> Mazingira Smart
                  </p>
                  <p className="text-gray-800">
                    <strong>Account Number:</strong> 1234567890
                  </p>
                  <p className="text-gray-800">
                    <strong>Branch Code:</strong> 12345
                  </p>
                </div>
              </div> */}

              {/* Mobile Money */}
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Mobile Money
                </h3>
                <p className="text-gray-600 mb-4">
                  Donate via mobile money using the following details:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800">
                    <strong>Service:</strong> M-Pesa
                  </p>
                  <p className="text-gray-800">
                    <strong>Paybill Number:</strong> 522533
                  </p>
                  <p className="text-gray-800">
                    <strong>Account Number:</strong> 7830763
                  </p>
                  <p className="text-gray-800">
                    <strong>Business name:</strong>.Mazingira Smart
                  </p>
                </div>
              </div>

              {/* Online Payment */}
              {/* <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Online Payment
                </h3>
                <p className="text-gray-600 mb-4">
                  Donate securely through our online payment platform.
                </p>
                <a
                  href="https://example.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 inline-block"
                >
                  Donate Now
                </a>
              </div> */}

              {/* Other Ways to Give */}
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Other Ways to Give
                </h3>
                <p className="text-gray-600 mb-4">
                  For other donation methods or inquiries, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-800">
                    <strong>Email:</strong> mazingirasmart@gmail.com
                  </p>
                  <p className="text-gray-800">
                    <strong>Phone:</strong> +254 791 831 939 / +254 725 952 484
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Router>
  );
}

export default App;
