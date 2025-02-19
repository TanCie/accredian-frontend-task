import { GiGraduateCap } from "react-icons/gi";

const Table = () => {
  const programs = [
    "Professional Certificate Program in Product Management",
    "PG Certificate Program in Strategic Product Management",
    "Executive Program in Data Driven Product Management",
    "Executive Program in Product Management and Digital Transformation",
    "Executive Program in Product Management",
    "Advanced Certification in Product Management",
    "Executive Program in Product Management and Project Management",
  ];
  const referralBonus = [
    "7,000",
    "8,000",
    "9,000",
    "10,000",
    "10,000",
    "10,000",
    "12,000",
  ];
  const refBonus = [
    "9,000",
    "10,000",
    "11,000",
    "12,000",
    "12,000",
    "12,000",
    "14,000",
  ];

  return (
    <div className="m-6 mr-0 shadow-[0px_4px_65px_1px_rgba(0,7,43,0.21)] backdrop-blur-md bg-opacity-50 overflow-x-auto sm:overflow-hidden">
      <table className="lg:w-full mx-auto rounded-lg">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-4 py-3 text-left text-md md:text-lg font-medium text-gray-600 uppercase tracking-wider">
              Programs
            </th>
            <th className="px-4 py-3 text-left text-md md:text-lg font-medium text-gray-600 uppercase tracking-wider">
              Referrer Bonus
            </th>
            <th className="px-4 py-3 text-left text-md md:text-lg font-medium text-gray-600 uppercase tracking-wider">
              Referee Bonus
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#EEF5FF] divide-y divide-gray-200">
          {programs.map((program, index) => (
            <tr key={index} className="text-gray-900">
              <td className="px-4 py-4 whitespace-normal break-words">
                <div className="flex gap-2 items-center">
                  <GiGraduateCap className="text-2xl text-blue-700" />
                  <span className="break-words text-sm md:text-lg">
                    {program}
                  </span>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-900 text-sm md:text-lg">
                ₹ {referralBonus[index]}
              </td>
              <td className="px-4 py-4 text-gray-900 text-sm md:text-lg">
                ₹ {refBonus[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
