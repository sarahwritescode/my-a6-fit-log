"use client";

import type { Workout } from "@/typs/workout";
import { useFitLog } from "@/context/fitlogcontext";

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useFitLog();

  const handleAddToPlan = () => {
    const added = addToPlan(workout);

    if (!added) {
      if (plan.some((item) => item.id === workout.id)) {
        alert("This workout is already in today's plan.");
      } else {
        alert("Today's plan can contain a maximum of 5 workouts.");
      }

      return;
    }

    alert("Added to today's plan");
  };

  const handleSave = () => {
    const added = saveWorkout(workout);

    if (!added) {
      alert("This workout is already saved.");
      return;
    }

    alert("Saved for later");
  };

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        className="btn flex-1 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
      >
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSave}
        className="btn flex-1 border border-zinc-700 bg-transparent text-white hover:bg-zinc-900"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;