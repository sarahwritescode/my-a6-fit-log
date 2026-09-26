"use client";

import type { Workout } from "@/typs/workout";
import { useFitLog } from "@/context/fitlogcontext";
import { toast } from "react-toastify";

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

  const alreadyInPlan = plan.some(
    (item) => item.id === workout.id
  );

  const alreadySaved = saved.some(
    (item) => item.id === workout.id
  );

  // Add to Today's Plan
  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast.info("This workout is already in today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.error(
        "Your plan is full. You can add up to 5 workouts."
      );
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan.");
  };

  // Save for later
  const handleSave = () => {
    if (alreadySaved) {
      toast.info("This workout is already saved.");
      return;
    }

    saveWorkout(workout);

    toast.success("Saved for later.");
  };

  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">

      {/* Add to Plan */}
      <button
        onClick={handleAddToPlan}
        className="btn flex-1 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
      >
        Add to today&apos;s plan
      </button>

      {/* Save */}
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