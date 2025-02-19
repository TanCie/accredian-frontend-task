import ReferButton from "./Button";

const Diagram = () => {
  return (
    <div className="bg-blue-100 py-8 flex flex-col items-center">
      <div className="w-[80%] flex flex-col items-center gap-1 md:gap-8">
        <h2 className="font-semibold text-2xl">
          How do I <span className="text-blue-700">Refer</span> ?
        </h2>
        <img src="/diagram.png" alt="" className="hidden md:block" />
        <img src="/mobdiag.png" alt="" className="block md:hidden" />
        <ReferButton />
      </div>
    </div>
  );
};

export default Diagram;

// copy the BUTTON from here and apply everywhere
