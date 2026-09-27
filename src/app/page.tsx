
import React from 'react';
 import { getWorkouts } from "@/lib/api";
import Hero from "@/components/hero";
import WorkoutLibrary from "@/components/workoutlibrary";


export default async function Home() {
  const workouts = await getWorkouts();
  

  console.log(workouts);

  return (
    <main>
     
      <Hero />

      

       <div id="workout-library">
  <WorkoutLibrary workouts={workouts} />
</div>
    </main>
  );
}