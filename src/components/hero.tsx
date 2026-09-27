"use client";
import Image from "next/image";
import { IoBarbell } from "react-icons/io5";
const Hero = () => {
  return (
    <section className="text-white">
      <div className="min-h-87.5 mx-auto max-w-7xl lg:flex-row  flex-col rounded-2xl flex border border-gray-700 bg-gray-800 p-8 m-8  lg:p-12">


        {/* Left side - Text */}
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into todays plan, and watch the weeks work add up.
          </p>

          <button
          onClick={() => {
            document
              .getElementById("workout-library")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer bg-lime-400 inline-flex px-4 py-2 mt-6 rounded gap-2 items-center text-black font-bold text-xs"
        >
          <IoBarbell className="size-4" />
          BROWSE WORKOUTS
        </button>
        </div>

        {/* Right side - Image */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/assets/banner.png"
            width={600}
            height={600}
            alt="FitLog workout"
            className="h-auto w-full max-w-xl object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;