"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useFitLog } from "@/context/fitlogcontext";
const Navbar = () => {
  const { plan, saved } = useFitLog();
  const links = <>
    <li><Link href='/' className='btn rounded-2xl hover:bg-[#b8e600] hover:text-black btn-ghost'>Workouts</Link></li>
    <li><Link href='/my-plan' className='btn rounded-2xl hover:bg-[#b8e600] hover:text-black btn-ghost'>My Plan</Link></li>

  </>


  return (
    <div className="navbar bg-base-100 mx-auto px-15 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Image
          src="/assets/logo.png"
          width={40}
          height={40}
          alt="FitLog logo"
        />
        <Link href="/" className="btn btn-ghost text-xl">
          FITLOG
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="flex items-center gap-2 justify-between">
  {/* Plan */}
  <div className="flex items-center gap-2 text-sm font-semibold text-white">
    <span>Plan</span>

    <Link
      href="/my-plan"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ccff00] text-sm font-bold text-black"
    >
      {plan.length}
    </Link>
  </div>

  {/* Saved */}
  <div className="flex items-center gap-2 text-sm font-semibold text-white">
    <span>Saved</span>

    <Link
      href="/my-plan"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-sm font-bold text-white"
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