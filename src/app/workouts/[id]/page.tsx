import Image from "next/image";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/workoutactions";
type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkOutPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const workout = await getWorkout(Number(id));

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Left - Image */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl lg:min-h-[650px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Details */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-black uppercase md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm uppercase"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-8 border-y border-zinc-800">

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-sm text-zinc-500">EQUIPMENT</span>
              <span>{workout.equipment}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-sm text-zinc-500">DIFFICULTY</span>
              <span>{workout.difficulty}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-sm text-zinc-500">SETS</span>
              <span>{workout.sets}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-sm text-zinc-500">REPS</span>
              <span>{workout.reps}</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-sm text-zinc-500">DURATION</span>
              <span>{workout.duration} min</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 py-4">
              <span className="text-sm text-zinc-500">CALORIES</span>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            <div className="flex justify-between py-4">
              <span className="text-sm text-zinc-500">RATING</span>
              <span>★ {workout.rating}</span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 text-zinc-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-bold text-black">
                    {index + 1}
                  </span>

                  <span className="leading-7">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <WorkoutActions workout={workout} />

        </div>
      </div>
    </main>
  );
};

export default WorkOutPage;