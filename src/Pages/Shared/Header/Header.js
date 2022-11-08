import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../asserts/clipart983880.png"

const Header = () => {
  return (
    <div className=''>
<div className=" fixed top-0 z-30 w-full px-2 py-4   sm:px-4 shadow-xl navbar  text-white text-xl bg-gray-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ">
        <li><Link>Home</Link></li>
        <li tabIndex={0}>
          <Link>
            Add Service
      
          </Link>
       
        </li>
        <li><Link>BLog</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li><Link>LogOut</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
      <img src={logo} className = "h-12" alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link>Home</Link></li>
      <li tabIndex={0}>
        <Link>
          Add Review
      
        </Link>

      </li>
      <li><Link>Add Service</Link></li>
      <li><Link>Blog</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li><Link to="/signup">Sign up</Link></li>

      <li><Link>Logout</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <p>image</p>
  </div>
</div>
    </div>
  );
};

export default Header;