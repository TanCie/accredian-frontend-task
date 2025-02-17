import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const programs = [
  "Data Science & AI",
  "Product Management",
  "Business Analytics",
  "Digital Transformation",
  "Business Management",
  "Project Management",
  "Strategy & Leadership",
  "Senior Management",
  "Fintech",
];
const footerLinks = [
  "About",
  "Career",
  "Blog",
  "Admission Policy",
  "Referral Policy",
  "Privacy Policy",
  "Terms Of Service",
  "Master FAQS",
];
const Footer = () => {
  return (
    <div className="bg-[#282828] text-gray-200 mt-16 p-10">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between">
          <img src="/accredainnew.webp" alt="" className="w-48" />
          <div className="flex flex-col items-center">
            <button className="btn text-xl py-6 px-16 btn-primary">
              Schedule a call
            </button>
            <p>Speak with our Learning Advisor</p>
          </div>
        </div>
        {/* 2nd half */}
        <div className="flex justify-around mt-15">
          <div className="">
            <h2 className="text-2xl mb-5">Programs</h2>
            <ul>
              {programs.map((program, index) => (
                <li key={index}>
                  <div className="flex justify-between gap-15 py-2 text-xl font-semibold">
                    {program}
                    <a href="#">+</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* 2nd part */}
          <div className="p-8 pt-2">
            {/* Example background and padding */}
            <div className="mx-auto">
              {" "}
              {/* Center the content */}
              <div className="mb-8">
                {" "}
                {/* Contact Us Section */}
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-2">
                  Email us (For Data Science Queries):{" "}
                  <a
                    href="mailto:admissions@accredian.com"
                    className="text-blue-400 hover:underline"
                  >
                    admissions@accredian.com
                  </a>
                </p>
                <p className="mb-2">
                  Email us (For Product Management Queries):{" "}
                  <a
                    href="mailto:pm@accredian.com"
                    className="text-blue-400 hover:underline"
                  >
                    pm@accredian.com
                  </a>
                </p>
                <p className="mb-2">
                  Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
                </p>
                <p className="mb-2">
                  Product Management Admission Helpline: +91 9625811095
                </p>
                <p className="mb-2">
                  Enrolled Student Helpline: +91 7969322507
                </p>
                <p className="mb-2">
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                  18, <br /> Gurugram, Haryana 122015
                </p>
              </div>
              <div className="mb-8">
                {" "}
                {/* Why Accredian Section (if needed) */}
                <h3 className="text-xl font-bold mb-4">Why Accredian</h3>
                {/* Add content here */}
              </div>
              <div>
                {" "}
                {/* Follow Us Section */}
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <ul className="flex space-x-4">
                  {" "}
                  {/* Social media icons */}
                  <li>
                    <a href="#" className="text-white hover:text-blue-400">
                      <FaFacebookF size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-400">
                      <FaLinkedinIn size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-400">
                      <FaTwitter size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-400">
                      <FaInstagram size={24} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-blue-400">
                      <FaYoutube size={24} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl mb-5">Accredian</h2>
            <ul>
              {footerLinks.map((links, index) => (
                <li key={index}>
                  <div className="flex justify-between gap-15 py-2 text-xl">
                    {links}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src="/footer.png" alt="" className="mt-8 h-30" />
      </div>
    </div>
  );
};

export default Footer;

// Import the icons
