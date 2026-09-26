import type { Workout } from "@/typs/workout";
import WorkoutCard from "./workoutcard";

type WorkoutLibraryProps = {
  workouts: Workout[];
};

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section
      id="library"
      className="bg-black px-6 py-16 text-white lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-black uppercase md:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-zinc-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkoutLibrary;