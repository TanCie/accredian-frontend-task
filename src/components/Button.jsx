/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const ReferButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const courses = [
    "PRODUCT_MANAGEMENT",
    "STRATEGY_LEADERSHIP",
    "BUSINESS_MANAGEMENT",
    "FINTECH",
    "SENIOR_MANAGEMENT",
    "DATA_SCIENCE",
    "DIGITAL_TRANSFORMATION",
    "BUSINESS_ANALYTICS",
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Referral submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          refereeName: "",
          refereeEmail: "",
          course: "",
        });
        closeModal();
      } else {
        alert("Error submitting referral!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered bg-gray-100 w-full"
                  placeholder="johnd@email.com"
                  required
                />
              </div>

              <div>
                <label className="pb-1 font-semibold italic block">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
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
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
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
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="select select-bordered w-full bg-gray-100"
                  required
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course.replace("_", " ")}
                    </option>
                  ))}
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
