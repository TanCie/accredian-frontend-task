import ReferButton from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <div className="bg-blue-100 w-fit rounded-full px-5 md:px-10 font-semibold mx-auto text-xs md:text-xl">
        <ul className="flex gap-8 md:gap-14 p-4 ">
          <a href="#" className=" hover:text-blue-600">
            Refer
          </a>
          <a href="#" className=" hover:text-blue-600">
            Benefits
          </a>
          <a href="#" className=" hover:text-blue-600">
            FAQs
          </a>
          <a href="#" className=" hover:text-blue-600">
            Support
          </a>
        </ul>
      </div>
      <div className="hidden md:flex bg-[#EEF5FF] w-[80%] h-[660px] mx-auto mt-6 rounded-2xl shadow-[0px_4px_65px_1px_rgba(0,7,43,0.21)] backdrop-blur-md bg-opacity-50">
        <div className="w-1/3 ml-3 mb-20 p-6 flex flex-col items-start justify-end">
          <img src="/earn.png" alt="" />
          <ReferButton />
        </div>
        <img src="/bgimg1.png" alt="" className="w-2/3 h-full" />
      </div>
      <div className="flex flex-col w-[80%] items-center mt-6 pb-10 md:hidden bg-[#eef5ff] shadow-[0px_4px_65px_1px_rgba(0,7,43,0.21)] backdrop-blur-md bg-opacity-50">
        <img src="/heromob.png" alt="" className="w-full h-full object-cover" />
        <ReferButton />
      </div>
    </div>
  );
};

export default Hero;

// add notes here and ther???
