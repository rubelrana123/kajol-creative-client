import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from "../../../asserts/clipart983880.png"
import { AuthContext } from '../../../Contexts/UserContext/UserContext';
 

const Header = () => {
  const {signout, user} = useContext(AuthContext);
  console.log( user?.photoURL);

  const handleSignout  = () => {
    signout().then(()=> {
      toast.success("Signout Seccessfully", {autoClose : 200})
    }).catch(err => console.log(err))
  }
  return (
    <div className=''>
<div className=" fixed top-0 z-30 w-full px-2 py-4   sm:px-4 shadow-2xl navbar  text-white text-xl bg-gray-700">
  <div className="navbar-start px-5">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content bg-gray-400 mt-3 pt-2 shadow  rounded-box w-96 ">
        <li><Link to="/">Home</Link></li>



        <li tabIndex={0}>
          <Link to="/addService">
            Add Service
      
          </Link>
       
        </li>
        <li tabIndex={0}>
          <Link to="/myReview">
            My  Review
      
          </Link>
       
        </li>
        <li><Link to="blog">BLog</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li className='ml-2' onClick={handleSignout}> Logout</li>
      </ul>
    </div>
    <Link  to="/" className="btn btn-ghost normal-case text-xl">
      <img src={logo} className = "h-12" alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="blog">Blog</Link></li>
      {
        user?.uid && user?.email  ?
         <>
       <li tabIndex={0}> <Link to="/myReview"> My Review  </Link> </li>
       <li><Link to="/addService">Add Service</Link></li>
      <li className='mt-3 cursor-pointer' onClick={handleSignout}>Logout</li>

         </>
        :
        <>
                <li><Link to="/login">LogIn</Link></li>
        

        
        </>
      }

 


    </ul>
  </div>
  <div className="navbar-end">
   {/* {user?.email &&  <p>{ user?.displayName || user?.email}</p> } */}
   {
    user?.photoURL && user?.uid
      &&
    <>
     <div className="avatar mr-3">
  <div  
	title={user?.displayName} className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} alt='' />
  </div>
</div>
    </>

   }
  </div>
</div>
    </div>
  );
};

export default Header;