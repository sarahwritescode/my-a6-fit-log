"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiClock, FiTrash2 } from "react-icons/fi";
import { BsFire } from "react-icons/bs";
import { FaStar } from "react-icons/fa";



import { useFitLog } from "@/context/fitlogcontext";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<
    "Duration" | "Calories" | "Rating"
  >("Duration");

 

  const handleRemove = (id: number, workoutName: string) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success(`${workoutName} removed from today's plan.`);
    } else {
      removeFromSaved(id);
      toast.success(`${workoutName} removed from saved.`);
    }
  };

  // Current list based on active tab
  const currentWorkouts = activeTab === "plan" ? plan : saved;

  // Metrics for current tab
const totalMinutes = currentWorkouts.reduce(
  (total, workout) => total + workout.duration,
  0
);

const totalCalories = currentWorkouts.reduce(
  (total, workout) => total + workout.caloriesBurned,
  0
);

  // Sort current list
  const workouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "Duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "Calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "Rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const handleSort = (
    option: "Duration" | "Calories" | "Rating"
  ) => {
    setSortBy(option);
  };

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black uppercase md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 md:gap-4">

          <div className="stat rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="stat-title text-xs uppercase text-zinc-500">
              Exercises
            </div>

            <div className="stat-value text-xl text-[#ccff00] md:text-3xl">
             {currentWorkouts.length}
            </div>
          </div>

          <div className="stat rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="stat-title text-xs uppercase text-zinc-500">
              Minutes
            </div>

            <div className="stat-value text-xl text-white md:text-3xl">
              {totalMinutes}
            </div>
          </div>

          <div className="stat rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="stat-title text-xs uppercase text-zinc-500">
              Calories
            </div>

            <div className="stat-value text-xl text-white md:text-3xl">
              {totalCalories}
            </div>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">

          {/* Tabs */}
          <div className="tabs tabs-boxed bg-zinc-950 p-1">

            <button
              onClick={() => setActiveTab("plan")}
              className={`tab ${activeTab === "plan"
                ? "bg-[#ccff00] font-bold text-black"
                : "text-zinc-400"
                }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`tab ${activeTab === "saved"
                ? "bg-[#ccff00] font-bold text-black"
                : "text-zinc-400"
                }`}
            >
              Saved
            </button>

          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">

            <span className="hidden text-xs text-zinc-600 sm:block">
              {workouts.length} items
            </span>

            {/* Sort Dropdown */}
            <div className="dropdown dropdown-end">

              <button
                tabIndex={0}
                type="button"
                className="btn btn-sm border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-[#ccff00] hover:bg-zinc-900"
              >
                Sort By: {sortBy}
                <FiChevronDown size={16} />
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu z-20 mt-2 w-44 rounded-xl border border-zinc-800 bg-zinc-950 p-2 shadow-xl"
              >
                <li>
                  <button
                    onClick={() => handleSort("Duration")}
                    className={
                      sortBy === "Duration"
                        ? "bg-[#ccff00] font-bold text-black hover:bg-[#b8e600]"
                        : "text-zinc-300"
                    }
                  >
                    Duration
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleSort("Calories")}
                    className={
                      sortBy === "Calories"
                        ? "bg-[#ccff00] font-bold text-black hover:bg-[#b8e600]"
                        : "text-zinc-300"
                    }
                  >
                    Calories
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleSort("Rating")}
                    className={
                      sortBy === "Rating"
                        ? "bg-[#ccff00] font-bold text-black hover:bg-[#b8e600]"
                        : "text-zinc-300"
                    }
                  >
                    Rating
                  </button>
                </li>
              </ul>

            </div>

          </div>

        </div>

        {/* Workout List */}
        <div className="mt-5 space-y-3">

          {workouts.length === 0 ? (

            /* Empty State */
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 px-6 text-center">

              <h2 className="text-lg font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mt-2 max-w-md text-sm text-zinc-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="btn mt-5 border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            workouts.map((workout) => (

              <div
                key={workout.id}
                className="card card-side overflow-hidden border border-zinc-800 bg-zinc-950"
              >

                {/* Image */}
                <figure className="relative hidden h-32 w-32 shrink-0 sm:block md:h-36 md:w-44">

                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />

                </figure>

                {/* Content */}
                <div className="card-body gap-2 p-4">

                  <div className="flex flex-col justify-between gap-3 sm:flex-row">

                    <div>
                      <h2 className="font-black uppercase">
                        {workout.name}
                      </h2>

                      <p className="mt-1 text-xs text-zinc-500">
                        {workout.equipment}
                      </p>
                    </div>

                    {/* Difficulty */}
                    <span className="badge border-zinc-700 bg-transparent text-zinc-400">
                      {workout.difficulty}
                    </span>

                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <FiClock size={14} />
                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                      <BsFire size={14} />
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaStar size={13} />
                      {workout.rating}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="card-actions mt-2 justify-end">

                    <Link
                      href={`/workouts/${workout.id}`}
                      className="btn btn-sm border-zinc-700 bg-transparent text-white hover:border-[#ccff00] hover:bg-transparent"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        className="btn btn-sm border-none bg-[#ccff00] text-black hover:bg-[#b8e600]"
                        onClick={() => {
                          toast.success(
                            `${workout.name} marked as done!`
                          );
                        }}
                      >
                        ✓ Mark as Done
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(workout.id, workout.name)}
                      className="btn btn-square btn-sm border-zinc-700 bg-transparent text-zinc-400 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
                      aria-label={`Remove ${workout.name}`}
                    >
                      <FiTrash2 size={16} />
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>
    </main>
  );
};

export default MyPlanPage;
