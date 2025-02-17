import ReferButton from "./Button";

const Diagram = () => {
  return (
    <div className="bg-blue-100 flex flex-col items-center gap-8 py-8">
      <h2 className="font-semibold text-2xl">
        How do I <span className="text-blue-700">Refer</span> ?
      </h2>
      <img src="/diagram.png" alt="" />
      <ReferButton />
    </div>
  );
};

export default Diagram;

// copy the BUTTON from here and apply everywhere
