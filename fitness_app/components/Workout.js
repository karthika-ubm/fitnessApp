import React, { useState } from "react";

import workouts from "../db.json";

// Sample JSON data

// Extract unique bodyPart options
const uniqueBodyParts = [...new Set(workouts.map(workout => workout.bodyPart))];

const ExerciseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("lower arms");

  // Filter workouts based on selected body part and search term
  const filteredWorkouts = workouts.filter(
    workout =>
      (selectedBodyPart === "All" || workout.bodyPart === selectedBodyPart) &&
      workout.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen p-8">
      {/* Heading */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-6">
        Let Us Find The Perfect Workout For You!
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Exercises"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-1/2 p-3 border border-gray-300 rounded-l-lg shadow focus:outline-none"
        />
        <button className="p-3 bg-gray-800 text-white font-bold rounded-r-lg shadow hover:bg-gray-600">
          Search
        </button>
      </div>

      {/* Dynamic Filters */}
      <div className="flex justify-center space-x-6 mb-8">
        {uniqueBodyParts.map(bodyPart =>
          <button
            key={bodyPart}
            onClick={() => setSelectedBodyPart(bodyPart)}
            className={`p-3 rounded-lg shadow ${selectedBodyPart === bodyPart
              ? "bg-gray-800 text-white"
              : "bg-white border border-gray-300 text-gray-800"}`}
          >
            {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
          </button>
        )}
      </div>

      {/* Results */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Showing Results
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map(workout =>
          <div
            key={workout.id}
            className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={workout.gifUrl}
              alt={workout.name}
              className="h-40 w-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {workout.name}
            </h3>
            <div className="flex space-x-2">
              <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">
                {workout.target}
              </span>
              <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">
                {workout.bodyPart}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseSearch;
