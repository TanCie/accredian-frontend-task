const programs = [
  "PRODUCT MANAGEMENT",
  "STRATEGY & LEADERSHIP",
  "BUSINESS MANAGEMENT",
  "FINTECH",
  "SENIOR MANAGEMENT",
  "DATA SCIENCE",
  "DIGITAL TRANSFORMATION",
  "BUSINESS ANALYTICS",
];

const ProgramLeft = () => {
  return (
    <div className="pb-3 mr-2 rounded-md shadow-[0px_4px_65px_1px_rgba(0,7,43,0.21)] backdrop-blur-md bg-opacity-50">
      {" "}
      {/* Container for styling */}
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-5 px-4 rounded mb-2">
        {/* "ALL PROGRAMS" button */}
        ALL PROGRAMS
      </div>
      <ul className="space-y-2 divide-y divide-gray-200">
        {" "}
        {/* Space between list items */}
        {programs.map((program, index) => (
          <li key={index} className="flex justify-between">
            <button className="bg-white hover:bg-gray-100 text-gray-700 font-medium py-4 px-4 rounded w-full text-left">
              {program}
            </button>
            <a href="#" className="font-bold pr-3">
              &gt;
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramLeft;
