"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useFitLog } from "@/context/fitlogcontext";

const Navbar = () => {
  const { plan, saved } = useFitLog();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className="btn btn-ghost rounded-2xl hover:bg-[#b8e600] hover:text-black"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="btn btn-ghost rounded-2xl hover:bg-[#b8e600] hover:text-black"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar border-b border-gray-700 bg-black">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-2 text-white"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box border border-zinc-800 bg-zinc-950 p-2 shadow-xl"
          >
            {links}
          </ul>
        </div>

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            width={40}
            height={40}
            alt="FitLog logo"
          />

          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-white"
          >
            FITLOG
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {links}
          </ul>
        </div>

        {/* Plan + Saved */}
        <div className="ml-auto flex items-center gap-2 sm:gap-5">

          {/* Plan */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white sm:gap-2 sm:text-sm">
            <span className="xs:inline">Plan</span>

            <Link
              href="/my-plan"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black sm:h-9 sm:w-9 sm:text-sm"
            >
            
             {plan.length}
            </Link>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-white sm:gap-2 sm:text-sm">
            <span className="xs:inline">Saved</span>

            <Link
              href="/my-plan"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-xs font-bold text-white sm:h-9 sm:w-9 sm:text-sm"
            >
              {saved.length}
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;