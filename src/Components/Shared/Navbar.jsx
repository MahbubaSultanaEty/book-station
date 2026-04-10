import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <li><NavLink
                to="/"
                className={ ({isActive}) => isActive ? "text-amber-800 border-amber-600 border-2": ""}
            >Home</NavLink></li>
            <li><NavLink
                to="/books"
                className={ ({isActive}) => isActive ? "text-amber-800 border-amber-600 border-2": ""}
            >Listed Books</NavLink></li>
            <li><NavLink
                to="/page-to-read"
                className={ ({isActive}) => isActive ? "text-amber-800 border-amber-600 border-2": ""}
            >Pages To Read</NavLink></li>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown   ">
                        <div tabIndex={0} role="button" className="btn   btn-ghost lg:hidden ">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
       
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold ">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Station</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold gap-12">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
   <button class="btn bg-amber-600 text-white hover:bg-amber-500  ">Sign In</button>
   <button class="btn  bg-yellow-800 text-white">Sign Up</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;