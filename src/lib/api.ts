import type { Workout } from "@/typs/workout";

const API_URL =  "https://api.api-store.workers.dev/api/fitlog";;

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkout(id: number): Promise<Workout> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
}