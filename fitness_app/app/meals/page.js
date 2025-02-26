"use client";
import { useEffect, useState } from "react";

import MealChart from "@/components/MealChart";

export default function Meals() {
  const [form, setForm] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: ""
  });
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `/api/meals?userId=${localStorage.getItem("userId")}`
      );
      const data = await res.json();
      setMeals(data);
    };
    fetchMeals();
  }, []);

  const addMeal = async e => {
    e.preventDefault();
    const res = await fetch("/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: localStorage.getItem("userId"), ...form })
    });
    const data = await res.json();
    setMeals([...meals, data]);
    setForm({ name: "", calories: "", protein: "", carbs: "", fat: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <MealChart />

      <h1 className="text-4xl text-center font-bold py-10">Meal Planner</h1>

      <form
        onSubmit={addMeal}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add a Meal
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Meal Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Meal Name
              </label>
              <input
                type="text"
                placeholder="Enter meal name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Meal Time */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Meal Time
              </label>
              <select
                value={form.time}
                onChange={e => setForm({ ...form, time: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Calories */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Calories
              </label>
              <input
                type="number"
                placeholder="Enter calories"
                value={form.calories}
                onChange={e => setForm({ ...form, calories: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Protein */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Protein (g)
              </label>
              <input
                type="number"
                placeholder="Enter protein content"
                value={form.protein}
                onChange={e => setForm({ ...form, protein: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Carbs */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Carbs (g)
              </label>
              <input
                type="number"
                placeholder="Enter carbs content"
                value={form.carbs}
                onChange={e => setForm({ ...form, carbs: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Fat */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Fat (g)
              </label>
              <input
                type="number"
                placeholder="Enter fat content"
                value={form.fat}
                onChange={e => setForm({ ...form, fat: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 mt-6 rounded-lg font-bold text-lg shadow-md transition-colors"
        >
          Add Meal
        </button>
      </form>

      {/* Meal History */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Meal History
        </h2>
        {meals.length > 0
          ? <ul className="divide-y divide-gray-300">
              {meals.map((meal, index) =>
                <li
                  key={index}
                  className="py-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {meal.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {meal.time} - {meal.calories} cal
                    </p>
                    <p className="text-sm text-gray-600">
                      Protein: {meal.protein}g, Carbs: {meal.carbs}g, Fat:{" "}
                      {meal.fat}g
                    </p>
                  </div>
                </li>
              )}
            </ul>
          : <p className="text-center text-gray-600">
              No meals added yet. Start adding some!
            </p>}
      </div>
    </div>
  );
}
