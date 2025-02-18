import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full">
      <div className="bg-blue-100 text-center p-4 md:p-2">
        <p>
          Navigate your ideal career path with tailored expert advice.
          <a href="#" className="pl-3 text-blue-700 font-semibold">
            Contact Expert
          </a>
        </p>
      </div>
      <div className="flex justify-between px-6 md:px-10 mb-4 pt-3">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.jpg" alt="" className="w-full" />

          <button className="hidden lg:flex items-center justify-center bg-blue-600 px-4 py-2 rounded-md cursor-pointer text-white">
            Courses
            <IoIosArrowDown className="pt-1 pl-1 text-xl" />
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center gap-4">
          <ul className="hidden lg:flex gap-4 font-semibold pr-4">
            <a href="#">Refer & Earn</a>
            <a href="#">Resources</a>
            <a href="#">About Us</a>
          </ul>
          <button className="btn btn-lg bg-gray-300 rounded-md font-semibold px-6 py-2 cursor-pointer">
            Login
          </button>
          <button className="btn btn-lg bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
            Try Now for Free
          </button>
        </div>
        <button
          onClick={() => setMenu(!menu)}
          className="flex md:hidden items-center font-bold text-4xl"
        >
          <TbMenuDeep />
        </button>
        {menu && (
          <div className="flex">
            <ul className="flex flex-col items-start justify-around">
              <li>
                <a>Refer & Earn</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
