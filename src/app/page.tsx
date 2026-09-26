  import React from 'react';
 import { getWorkouts } from "@/lib/api";
import Hero from "@/components/hero";

export default async function Home() {
  const workouts = await getWorkouts();

  console.log(workouts);

  return (
    <main>
      <Hero />

      <section
        id="library"
        className="min-h-screen bg-black text-white"
      >
        <h2 className="px-6 py-20 text-4xl font-bold">
          THE LIBRARY
        </h2>
      </section>
    </main>
  );
}