"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/typs/workout";

type FitLogContextType = {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => boolean;
  removeFromSaved: (id: number) => void;
};

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

type FitLogProviderProps = {
  children: ReactNode;
};

export function FitLogProvider({ children }: FitLogProviderProps) {
  // Get today's plan from localStorage
  const [plan, setPlan] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedPlan = localStorage.getItem("fitlog-plan");

    return storedPlan ? JSON.parse(storedPlan) : [];
  });

  // Get saved workouts from localStorage
  const [saved, setSaved] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedSaved = localStorage.getItem("fitlog-saved");

    return storedSaved ? JSON.parse(storedSaved) : [];
  });

  // Save plan whenever it changes
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts whenever they change
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  // Add workout to today's plan
  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    if (plan.length >= 5) {
      return false;
    }

    setPlan((current) => [...current, workout]);

    return true;
  };

  // Remove workout from today's plan
  const removeFromPlan = (id: number) => {
    setPlan((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  // Save workout
  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      return false;
    }

    setSaved((current) => [...current, workout]);

    return true;
  };

  // Remove saved workout
  const removeFromSaved = (id: number) => {
    setSaved((current) =>
      current.filter((workout) => workout.id !== id)
    );
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}