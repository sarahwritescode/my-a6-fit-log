import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/typs/workout";
import { FiClock } from "react-icons/fi";
import { BsFire } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type WorkoutCardProps = {
    workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-[#ccff00]"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle groups */}
                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-semibold uppercase text-zinc-300"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold uppercase text-white">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-zinc-400">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4 text-sm text-zinc-300">
                    <span className="flex items-center gap-1.5">
                        <FiClock size={15} /> {workout.duration} min </span>
                    <span className="flex items-center gap-1.5">
                        <BsFire size={15} /> {workout.caloriesBurned} kcal </span>
                    <span className="flex items-center gap-1.5">
                        <FaStar size={14} /> {workout.rating} </span>
                </div>

            </div>
        </Link>
    );
};

export default WorkoutCard;