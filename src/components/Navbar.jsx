import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="bg-blue-100 text-center p-2">
        <p>
          Navigate your ideal career path with tailored expert advice.
          <a href="#" className="pl-3 text-blue-700 font-semibold">
            Contact Expert
          </a>
        </p>
      </div>
      <div className="flex justify-between px-5 mb-4 pt-3">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.jpg" alt="" />
          {/* dropdown ADDD */}
          <button className="flex items-center justify-center bg-blue-600 px-4 py-2 rounded-md cursor-pointer text-white">
            Courses
            <IoIosArrowDown className="pt-1 pl-1 text-xl" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <ul className="flex gap-4 font-semibold pr-4">
            <a href="#">Refer & Earn</a>
            <a href="#">Resources</a>
            <a href="#">About Us</a>
          </ul>
          <button className="bg-gray-300 rounded-md font-semibold px-4 py-2 cursor-pointer">
            Login
          </button>
          <button>Try Now for Free</button>
        </div>
      </div>
    </div>
  );
}
