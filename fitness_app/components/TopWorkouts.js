import React from "react";

const TopWorkouts = () => {
  return (
    <div
      id="top_workouts"
      className="flex flex-col items-center py-10 bg-gradient-to-r from-gray-100 to-purple-200"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Top Workouts</h1>
      <div className="grid grid-cols-3 space-x-6 mb-8 ">
        {/* Yoga Card */}
        <div className="bg-gray-100 rounded-lg shadow-xl p-6 flex flex-col items-center ">
          <img
            src="/images/yoga.jpg"
            alt="Yoga Training"
            className="h-48 w-auto mb-4 rounded-lg"
          />
          <h2 className="text-xl font-semibold text-gray-800">Yoga Training</h2>
          <p className="text-gray-500">For Beginners</p>
        </div>
        {/* Cardio Card */}
        <div className="bg-gray-100 rounded-lg shadow-xl p-6 flex flex-col items-center ">
          <img
            src="/images/cardio.webp"
            alt="Cardio Training"
            className="h-48 w-full mb-4 rounded-lg"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            Cardio Training
          </h2>
          <p className="text-gray-500">For Intermediates</p>
        </div>
        {/* CrossFit Card */}
        <div className="bg-gray-100 rounded-lg shadow-xl p-6 flex flex-col items-center ">
          <img
            src="/images/crossfit.webp"
            alt="CrossFit Training"
            className="h-48 w-auto mb-4 rounded-lg"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            CrossFit Training
          </h2>
          <p className="text-gray-500">For Experts</p>
        </div>
      </div>
    </div>
  );
};

export default TopWorkouts;
