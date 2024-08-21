import SocialMediaTransition from "./icon";
export default function AboutUs() {
  return (
    <>
      <div className=" font-Raleway p-7 sm:p-14 lg:p-32 md:px-36 lg:px-44 px-4 sm:px-10  text-white bg-black">
        {/* About Us Section */}
        <div className="grid grid-flow-col h-fit">

        <div className="  justify-evenly space-y-8 lg:space-y-12 mb-10 lg:mb-20">
        <h1 className="font-semibold text-3xl lg:text-4xl">About us</h1>
          <p className="text-left md:text-justify h-fit text-base sm:text-lg lg:text-3xl text-gray-300 leading-relaxed">
          Our department leads GGSIPU's digital transformation, creating software to enhance faculty and student operations. With top students, we streamline tasks, improve management, and connect the campus, driving educational innovation and efficiency.
          </p>
        </div>
          <div className="grid grid-flow-col w-24 md:hidden ">
            <SocialMediaTransition />
          </div>
        </div>

        <div className="flex flex-col mt-0 md:flex-row justify-between items-center md:space-x-6 lg:space-x-4 md:text-lg lg:text-xl">
          <div className="flex flex-col items-center mb-5 md:mb-0">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col space-y-3 items-center">
                <h1 className="uppercase">become a member</h1>
                <button className="items-center uppercase bg-black border hover:bg-white hover:duration-500
                 hover:text-black delay-200 border-white px-10 py-2 md:text-3xl">
                  JOIN US
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex hidden  space-x-6">
            <SocialMediaTransition />
          </div>
        </div>
      </div>
    </>
  );
}
