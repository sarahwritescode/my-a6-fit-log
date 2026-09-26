"use client";
import React from 'react';
import { toast } from "react-toastify";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useFitLog } from "@/context/fitlogcontext";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // Metrics for today's plan
  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (id: number, workoutName: string) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success(`${workoutName} removed from today's plan.`);
    } else {
      removeFromSaved(id);
      toast.success(`${workoutName} removed from saved.`);
    }
  };

  const workouts = activeTab === "plan" ? plan : saved;

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
              {plan.length}
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

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-between border-b border-zinc-800">

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

          <span className="hidden text-xs text-zinc-600 sm:block">
            {workouts.length} items
          </span>

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

                    <span>
                      ⏱ {workout.duration} min
                    </span>

                    <span>
                      🔥 {workout.caloriesBurned} kcal
                    </span>

                    <span>
                      ★ {workout.rating}
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
                          toast.success(`${workout.name} marked as done!`);
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
                      ×
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