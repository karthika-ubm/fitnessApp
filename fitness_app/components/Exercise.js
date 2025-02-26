export default function ExerciseCards() {
  const exercises = [
    {
      id: "0016",
      gifUrl:
        "https://res.cloudinary.com/devthakur/image/upload/v1686929351/Exercises_Gif/gif_image_0016.gif",
      bodyPart: "upper arms",
      equipment: "leverage machine",
      name: "assisted triceps dip (kneeling)",
      target: "triceps"
    },
    {
      id: "0017",
      gifUrl:
        "https://res.cloudinary.com/devthakur/image/upload/v1686929351/Exercises_Gif/gif_image_0017.gif",
      bodyPart: "upper legs",
      equipment: "body weight",
      name: "balance board",
      target: "quads"
    },
    {
      id: "0018",
      gifUrl:
        "https://res.cloudinary.com/devthakur/image/upload/v1686929351/Exercises_Gif/gif_image_0018.gif",
      bodyPart: "back",
      equipment: "barbell",
      name: "barbell pullover to press",
      target: "lats"
    }
  ];

  return (
    <div
      id="session"
      className="w-full h-full  object-cover "
      style={{ backgroundImage: "url('/images/bg-gym.webp')" }}
    >
      <div className="py-10 px-14">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Workout Sessions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl py-10 ">
          {exercises.map(exercise =>
            <div
              key={exercise.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <a href="/workouts">
                <div className="relative">
                  <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    className="w-full h-96 object-fit rounded-t-xl"
                  />
                  <span className="absolute top-2 right-2 bg-purple-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {exercise.bodyPart.toUpperCase()}
                  </span>
                </div>
              </a>
              <a href="/workouts">
                <div className="p-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-b-xl">
                  <h3 className="text-lg font-bold text-gray-800 capitalize">
                    {exercise.name}
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <strong>Equipment:</strong> {exercise.equipment}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Target:</strong> {exercise.target}
                    </p>
                  </div>
                </div>
              </a>
              {/* <div className="px-6 py-4 bg-gray-100 rounded-b-lg">
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
        Start Exercise
      </button>
    </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
