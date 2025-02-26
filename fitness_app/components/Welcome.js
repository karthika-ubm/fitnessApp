import Image from "next/image";

export default function WelcomePage() {
  return (
    <div id="home" className="min-h-screen ">
      {/* <h1 className="text-3xl font-bold mb-6">Fitness Dashboard</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<Link href="/workouts" className="bg-blue-500  p-6 rounded shadow">
  Track Workouts
</Link>
<Link href="/meals" className="bg-green-500  p-6 rounded shadow">
  Log Meals
</Link>
<Link href="/goals" className="bg-orange-500  p-6 rounded shadow">
  Set Fitness Goals
</Link>
</div> */}

      <div
        style={{
          backgroundImage: "url('/images/bgDumbells.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className="bg-black h-screen"
      >
        <div>
          <nav className=" p-4">
            <div className="container mx-auto flex items-center justify-end">
              {/* Logo */}
              {/* <a href="/" className=" font-bold text-lg">MyApp</a> */}

              {/* Navigation Links */}
              <ul className="flex space-x-10 bg-gray-200 bg-opacity-20 p-2 shadow-xl rounded-xl">
                <li>
                  <a
                    href="#home"
                    className="text-gray-200 hover:bg-gray-200  hover:text-black hover:rounded-xl text-lg px-5 p-2"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#top_workouts"
                    className="text-gray-200 hover:bg-gray-200 hover:text-black hover:rounded-xl text-lg px-5 p-2"
                  >
                    Top Workouts
                  </a>
                </li>
                <li>
                  <a
                    href="#session"
                    className="text-gray-200 hover:bg-gray-200 hover:text-black hover:rounded-xl text-lg px-5 p-2"
                  >
                    Sessions
                  </a>
                </li>
                <li>
                  <a
                    href="#diet"
                    className="text-gray-200 hover:bg-gray-200 hover:text-black hover:rounded-xl text-lg px-5 p-2"
                  >
                    Diet Plan
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex items-center ">
          <div style={{ transform: "rotate(-10deg)" }} className="">
            <Image
              src="/images/running.png"
              alt="download icon"
              className="ml-4 object-cover"
              width={600}
              height={600}
            />
          </div>
          <div className="mr-24">
            <div className="text-center justify-center">
              <p className="font-semibold text-3xl  md:text-5xl text-gray-200 ">
                One step towards a healthy lifestyle
              </p>
              <p
                className="font-thin text-md md:text-lg mt-4 text-gray-200 pt-4"
                style={{ letterSpacing: "0.1rem" }}
              >
                Healthy body is the secret of a healthy lifestyle. Start your
                day with <b>Fitness</b>.
              </p>
              <button
                type="submit"
                className=" p-3 px-8 bg-gray-100 text-black font-semibold rounded-lg hover:bg-gray-300  my-16"
              >
                <p className=" text-lg ">Get Started</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
