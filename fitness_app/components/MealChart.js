import React, { useState } from "react";

const meals = [
  {
    id: 1,
    name: "Oatmeal with Berries",
    mealTime: "morning",
    dietType: "veg",
    calories: 250,
    ingredients: ["Oats", "Milk", "Berries", "Honey"]
  },
  {
    id: 2,
    name: "Grilled Chicken Salad",
    mealTime: "afternoon",
    dietType: "non-veg",
    calories: 350,
    ingredients: ["Grilled Chicken", "Lettuce", "Tomatoes", "Olive Oil"]
  },
  {
    id: 3,
    name: "Veggie Stir Fry",
    mealTime: "evening",
    dietType: "veg",
    calories: 300,
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"]
  },
  {
    id: 4,
    name: "Egg Omelette",
    mealTime: "morning",
    dietType: "non-veg",
    calories: 200,
    ingredients: ["Eggs", "Onions", "Spinach", "Cheese"]
  },
  {
    id: 5,
    name: "Paneer Curry with Rice",
    mealTime: "night",
    dietType: "veg",
    calories: 450,
    ingredients: ["Paneer", "Rice", "Spices", "Cream"]
  },
  {
    id: 6,
    name: "Fish Tacos",
    mealTime: "evening",
    dietType: "non-veg",
    calories: 400,
    ingredients: ["Fish", "Taco Shells", "Cabbage", "Salsa"]
  }
];

const MealChart = () => {
  const [selectedMealTime, setSelectedMealTime] = useState("all");
  const [selectedDietType, setSelectedDietType] = useState("all");

  const filteredMeals = meals.filter(
    meal =>
      (selectedMealTime === "all" || meal.mealTime === selectedMealTime) &&
      (selectedDietType === "all" || meal.dietType === selectedDietType)
  );

  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover py-10 px-14"
      style={{
        backgroundImage: "url('/images/bgmeal6.avif')"
      }}
    >
      {/* Heading */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-10">
        Your Personalized Meal Plan
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Meal Time Filter */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filter by Meal Time
          </h3>
          {["all", "morning", "afternoon", "evening", "night"].map(time =>
            <button
              key={time}
              onClick={() => setSelectedMealTime(time)}
              className={`p-3 px-6 rounded-full font-medium shadow transition ${selectedMealTime ===
              time
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300 text-gray-800 hover:bg-green-100"}`}
            >
              {time.charAt(0).toUpperCase() + time.slice(1)}
            </button>
          )}
        </div>

        {/* Diet Type Filter */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filter by Diet Type
          </h3>
          {["all", "veg", "non-veg"].map(type =>
            <button
              key={type}
              onClick={() => setSelectedDietType(type)}
              className={`p-3 px-6 rounded-full font-medium shadow transition ${selectedDietType ===
              type
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300 text-gray-800 hover:bg-green-100"}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          )}
        </div>
      </div>

      {/* Meals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMeals.map(meal =>
          <div
            key={meal.id}
            className="relative bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            {/* Badge for Meal Type */}
            <span
              className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${meal.dietType ===
              "veg"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"}`}
            >
              {meal.dietType.charAt(0).toUpperCase() + meal.dietType.slice(1)}
            </span>

            {/* Card Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {meal.name}
            </h3>

            {/* Calories Info */}
            <p className="text-sm text-gray-700 mb-4">
              <span className="text-gray-900 font-semibold">
                Calories:
              </span>{" "}
              {meal.calories}
            </p>

            {/* Ingredients Section */}
            <ul className="text-sm text-gray-700 mb-4">
              <strong className="block text-gray-900 mb-2">Ingredients:</strong>
              {meal.ingredients.map((ingredient, index) =>
                <li
                  key={index}
                  className="flex items-center gap-2 list-none mb-1"
                >
                  <svg
                    className="w-4 h-4 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2l4-4"
                    />
                  </svg>
                  {ingredient}
                </li>
              )}
            </ul>

            {/* Call-to-Action Button */}
            <button
              className="mt-auto bg-green-600 text-white py-2 px-4 rounded-full font-semibold text-sm hover:bg-green-700 transition-all"
              onClick={() => alert(`You selected ${meal.name}`)}
            >
              Select Meal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealChart;
