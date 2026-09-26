import type { Workout } from "@/typs/workout";

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

export function getPlan(): Workout[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(PLAN_KEY);

  return data ? JSON.parse(data) : [];
}

export function getSaved(): Workout[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(SAVED_KEY);

  return data ? JSON.parse(data) : [];
}

export function savePlan(workouts: Workout[]) {
  localStorage.setItem(PLAN_KEY, JSON.stringify(workouts));
}

export function saveSaved(workouts: Workout[]) {
  localStorage.setItem(SAVED_KEY, JSON.stringify(workouts));
}