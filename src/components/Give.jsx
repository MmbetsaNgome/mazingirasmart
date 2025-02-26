import React from "react";

const Give = () => {
  return (
    <div>
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
              <div>
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
              </div>

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
                    <strong>Paybill Number:</strong> 123456
                  </p>
                  <p className="text-gray-800">
                    <strong>Account Number:</strong> Mazingira Smart
                  </p>
                </div>
              </div>

              {/* Online Payment */}
              <div>
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
              </div>

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
                    <strong>Email:</strong> donate@mazingirasmart.org
                  </p>
                  <p className="text-gray-800">
                    <strong>Phone:</strong> +254 700 000 000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Give;
