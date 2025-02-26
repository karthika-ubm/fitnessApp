// app/dashboard.js
import AboutUs from "@/components/AboutUs";
import DietPlanCard from "@/components/DietPlan";
import ExerciseCards from "@/components/Exercise";
import TopWorkouts from "@/components/TopWorkouts";
import WelcomePage from "@/components/Welcome";

export default function Dashboard() {
  return (
    <div>
      {/* Landing screen */}
      <WelcomePage />
      {/* Top Workouts section */}
      <TopWorkouts />
      {/* About me section */}
      <AboutUs />
      {/* Workout Session */}
      <ExerciseCards />
      {/* Diet Plan */}
      <DietPlanCard />
    </div>
  );
}
