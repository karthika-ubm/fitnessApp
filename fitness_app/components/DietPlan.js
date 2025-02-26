export default function DietPlanCard() {
  const dietPlan = [
    {
      time: "Morning",
      icon: "☀️",
      image: "/images/mdiet.jpg"
    },
    {
      time: "Afternoon",
      icon: "🌤️",
      image: "/images/adiet.jpg"
    },
    {
      time: "Night",
      icon: "🌙",
      image: "/images/ndiet.jpg"
    }
  ];

  return (
    <div
      id="diet"
      className="bg-gradient-to-r from-purple-100 to-indigo-50 py-10 px-14"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-10  text-center">
        Diet Plan
      </h1>

      <div className=" flex items-center justify-center ">
        <div className="grid grid-cols-3  gap-6 w-full max-w-5xl p-4">
          {dietPlan.map(meal =>
            <div
              key={meal.time}
              className="bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-inner transition-shadow duration-300"
            >
              <a href="/meals">
                <img
                  src={meal.image}
                  alt={`${meal.time} meal`}
                  className="w-full h-56 object-cover"
                />
              </a>
              <a href="/meals">
                <div className="p-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-3xl mr-3">
                      {meal.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {meal.time}
                    </h2>
                  </div>
                  {/* <ul className="mt-2 space-y-1">
                {meal.items.map((item, index) =>
                  <li key={index} className="text-sm text-gray-700">
                    - {item}
                  </li>
                )}
              </ul> */}
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
