import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center h-70vh justify-center py-4 bg-gradient-to-r from-purple-100 to-white">
      {/* Left Image Section */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/images/gym1.png"
          alt="Fitness Woman"
          className=" w-auto object-contain"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-1/2 p-14 text-justify">
        <h1 className="text-4xl font-bold text-gray-800 mb-20">About Us</h1>
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          We Are Ready To Making You <br /> In A Shape
        </h1>
        <p className="text-gray-600 mb-4">
          Finding motivation to work out can be challenging. There are so many
          distractions and less physically demanding alternatives to spending an
          hour at the gym or working out at home.
        </p>
        <p className="text-gray-600 mb-6">
          You need to understand that strength does not come from physical
          capacity. It comes from an indomitable will.
        </p>
        <button className="px-6 py-2 bg-purple-400  text-white font-semibold rounded-lg shadow-lg  transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
