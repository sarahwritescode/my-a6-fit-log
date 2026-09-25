  import React from 'react';
  import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  console.log(workouts)
  return (
    <main>
      <h1>FitLog</h1>
    </main>
  );
}