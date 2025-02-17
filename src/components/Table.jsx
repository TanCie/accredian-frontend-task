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
    <div className="m-6 shadow-[0px_4px_65px_1px_rgba(0,7,43,0.21)] backdrop-blur-md bg-opacity-50">
      <table className="min-w-full rounded-lg overflow-hidden">
        <thead className="bg-blue-200">
          <tr>
            <th className="w-1/2 px-6 py-3 text-left text-lg font-medium text-gray-600 uppercase tracking-wider">
              Programs
            </th>
            <th className="w-1/4 px-6 py-3 text-left text-lg font-medium text-gray-600 uppercase tracking-wider">
              Referrer Bonus
            </th>
            <th className="w-1/4 px-6 py-3 text-left text-lg font-medium text-gray-600 uppercase tracking-wider">
              Referee Bonus
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#EEF5FF] divide-y divide-gray-200">
          {programs.map((program, index) => (
            <tr key={index}>
              <td className="w-1/2 px-6 py-6 whitespace-nowrap text-gray-900">
                <div className="flex gap-2 items-center">
                  <GiGraduateCap className="text-2xl text-blue-700" />
                  {program}
                </div>
              </td>
              <td className="w-1/4 px-6 py-6 whitespace-nowrap text-gray-900">
                ₹ {referralBonus[index]}
              </td>
              <td className="w-1/4 px-6 py-6 whitespace-nowrap text-gray-900">
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
