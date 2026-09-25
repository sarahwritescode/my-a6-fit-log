import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const navbar = () => {

const links = <>    
       <li><Link href='/workouts'>Workouts</Link></li>
        <li><Link href='/myplan'>My Plan</Link></li>
       
</>


    return (
       <div className="navbar bg-base-100 shadow-sm">
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
    <a className="btn btn-ghost text-xl">FITLOG</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
        >
          Plan 0
        </Link>

        {/* Saved */}
        <Link
          href="/my-plan"
          className="rounded-full border border-white/40 px-4 py-2 text-sm font-bold text-white"
        >
          Saved 0
        </Link>

      </div>

</div>
    );
};

export default navbar;