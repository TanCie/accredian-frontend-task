import { IoMdArrowDropdown } from "react-icons/io";

const Faq = () => {
  return (
    <div className="mt-30">
      <div className="w-[80%] lg:w-[60%] mx-auto">
        <h2 className="font-semibold text-center text-3xl mb-16">
          Frequently Asked <span className="text-blue-700">Questions</span> ?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-5">
            <button className="btn px-12 py-7 text-lg btn-ghost hover:text-blue-400 shadow-[0_0_4px_2px_rgb(0_0_0/0.2)]">
              Eligibility
            </button>
            <button className="btn px-12 py-7 text-lg btn-ghost hover:text-blue-400 shadow-[0_0_4px_2px_rgb(0_0_0/0.2)]">
              How To Use?
            </button>
            <button className="btn px-12 py-7 text-lg btn-ghost hover:text-blue-400 shadow-[0_0_4px_2px_rgb(0_0_0/0.2)]">
              Terms & Conditions
            </button>
          </div>
          <div className="ml-8 mt-16 lg:w-[70%]">
            <div className="text-xl">
              Do I need to have prior Product Management experience to enroll in
              the program?
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-ghost text-2xl"
                >
                  <IoMdArrowDropdown />
                </div>
                <div
                  tabIndex={0}
                  className="card card-md dropdown-content bg-base-100 rounded-box z-1 w-96 shadow-sm"
                >
                  <div tabIndex={0} className="card-body">
                    <p>
                      No, the program is designed to be inclusive of all levels
                      of experience. All topics will be covered from the basics,
                      making it suitable for individuals from any field of work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl">
              What is the minimum system configuration required?
              <div className=" dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-circle btn-ghost text-2xl"
                >
                  <IoMdArrowDropdown />
                </div>
                <div
                  tabIndex={0}
                  className="card card-md dropdown-content bg-base-100 rounded-box z-1 w-96 shadow-sm"
                >
                  <div tabIndex={0} className="card-body">
                    <p>
                      No, the program is designed to be inclusive of all levels
                      of experience. All topics will be covered from the basics,
                      making it suitable for individuals from any field of work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-neutral px-10 py-5 mt-10 text-lg btn-soft">
                More Questions
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="#">
        <img
          src="/below.png"
          alt=""
          className="mt-16 w-[70%] mx-auto hidden md:block"
        />
      </a>
    </div>
  );
};

export default Faq;
