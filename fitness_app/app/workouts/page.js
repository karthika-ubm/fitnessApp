"use client";
import { useEffect, useState } from "react";

import ExerciseSearch from "@/components/Workout";

export default function Workouts() {
  const [form, setForm] = useState({ name: "", duration: "", calories: "" });
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch(
        `/api/workouts?userId=${localStorage.getItem("userId")}`
      );
      const data = await res.json();
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  const addWorkout = async e => {
    e.preventDefault();
    const res = await fetch("/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: localStorage.getItem("userId"), ...form })
    });
    const data = await res.json();
    setWorkouts([...workouts, data]);
    setForm({ name: "", duration: "", calories: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <ExerciseSearch />
      <h1 className="text-4xl text-center  font-bold py-10">Workout Tracker</h1>
      <form
        onSubmit={addWorkout}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add a Workout
        </h2>
        <div className="space-y-4">
          {/* Exercise Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Exercise Name
            </label>
            <input
              type="text"
              placeholder="Enter exercise name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Duration (mins)
            </label>
            <input
              type="number"
              placeholder="Enter duration in minutes"
              value={form.duration}
              onChange={e => setForm({ ...form, duration: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Calories Burned */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Calories Burned
            </label>
            <input
              type="number"
              placeholder="Enter calories burned"
              value={form.calories}
              onChange={e => setForm({ ...form, calories: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 mt-6 rounded-lg font-bold text-lg shadow-md  transition-colors"
        >
          Add Workout
        </button>
      </form>

      {/* Workout History */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Workout History
        </h2>
        {workouts.length > 0
          ? <ul className="divide-y divide-gray-300">
              {workouts.map((workout, index) =>
                <li
                  key={index}
                  className="py-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {workout.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {workout.duration} mins - {workout.calories} cal
                    </p>
                  </div>
                </li>
              )}
            </ul>
          : <p className="text-center text-gray-600">
              No workouts added yet. Start adding some!
            </p>}
      </div>
    </div>
  );
}
