import ReferButton from "./Button";
import ProgramLeft from "./ProgramLeft";
import Table from "./Table";

export default function ReferBenefits() {
  return (
    <div className="my-8 flex flex-col items-center">
      <h2 className="font-semibold text-center text-2xl">
        What are the <span className="text-blue-700">Referral Benefits?</span>
      </h2>
      <div className="flex flex-col items-center lg:flex-row lg:w-[75%] py-10">
        <div className="hidden md:block w-2/3 lg:w-1/3 pt-5">
          <ProgramLeft />
        </div>
        <div className="w-5/6 lg:w-2/3">
          <Table />
        </div>
      </div>
      <ReferButton />
    </div>
  );
}
