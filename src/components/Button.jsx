/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { toast } from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_PUBLIC_BASE_URL;

const ReferButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState();
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
      setIsSubmitting(true);
      // First, submit the referral
      const referralResponse = await fetch(`${BASE_URL}/referrals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (referralResponse.ok) {
        toast.success("Referral submitted successfully!");

        // Send the email after successful referral submission
        const emailResponse = await fetch(`${BASE_URL}/send-emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.refereeEmail, // Use the referee's email
            subject: "Exclusive Discount Just for You!",
            body: `Hello,
              
            We’re excited to offer you an exclusive discount on subscribing to Accredian! Click the link below to claim your offer: http://example.com/discount`,
          }),
        });

        if (emailResponse.ok) {
          console.log("Email sent successfully!");
        } else {
          console.log("Failed to send email");
        }

        // Reset form and close modal
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
        toast.error("Please make sure you aren't using an existing Email!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="btn btn-lg px-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-5 md:mt-15"
      >
        Refer Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-transparent bg-opacity-50">
          <div className="bg-blue-300 p-8 rounded-lg w-4/5 lg:w-1/3">
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

              <div className="flex justify-around mt-6">
                <button
                  type="submit"
                  className="btn btn-lg font-bold btn-success px-10"
                >
                  {isSubmitting ? (
                    <span className="loading loading-bars loading-sm"></span>
                  ) : (
                    <p>Submit</p>
                  )}
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="btn btn-lg btn-error font-bold px-10"
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
