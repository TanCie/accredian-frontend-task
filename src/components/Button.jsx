/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const ReferButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Placeholder action
    closeModal();
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="btn btn-lg px-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-15"
      >
        Refer Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
          <div className="bg-blue-300 p-8 rounded-lg w-1/3">
            <h3 className="font-bold text-center text-3xl mb-10">
              Referral Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="pb-1 font-semibold italic block">
                  Your Name
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">Email</label>
                <input
                  type="email"
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="johnd@email.com"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">Phone</label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="Enter 10-digit phone number"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">
                  Your Friend's Name
                </label>
                <input
                  type="text"
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="Referee Name"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">
                  Your Friend's Email
                </label>
                <input
                  type="email"
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="friend@email.com"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">
                  Referring for Course
                </label>
                <select
                  className="select select-bordered w-full bg-gray-100"
                  required
                >
                  <option value="" disabled selected>
                    Choose an option
                  </option>
                  <option value="product management">Product Management</option>
                  <option value="strategy & leadership">
                    Strategy & Leadership
                  </option>
                  <option value="business management">
                    Business Management
                  </option>
                  <option value="fintech">Fintech</option>
                  <option value="senior management">Senior Management</option>
                  <option value="data science">Data Science</option>
                  <option value="digital transformation">
                    Digital Transformation
                  </option>
                  <option value="business analytics">Business Analytics</option>
                </select>
              </div>

              <div className="flex justify-around">
                <button type="submit" className="btn btn-success px-8">
                  Submit
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="btn btn-error px-8"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferButton;
