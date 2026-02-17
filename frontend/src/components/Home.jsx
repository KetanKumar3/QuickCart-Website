import React from "react";
import picture2 from "../assets/picture2.png";

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
            Every Journey Begins with a{" "}
            <span className="text-red-500">Bold Choice</span>.
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base lg:text-lg">
            Discover cars that redefine performance, comfort, and style.
          </p>

          <div className="mt-6">
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-full text-white font-semibold">
              Explore Cars
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={picture2}
            alt="Car"
            className="w-72 sm:w-96 lg:w-[500px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;