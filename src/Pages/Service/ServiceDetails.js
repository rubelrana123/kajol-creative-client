import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import UseTitle from '../../Title/UseTitle';

const ServiceDetails = () => {
  UseTitle("Service")
  const serviceDetails = useLoaderData();
  const {description, rating, imgage, price, title} = serviceDetails;
  console.log(serviceDetails);
  const {user} = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen pt-24 bg-base-200">
  <div className="hero-content flex-col justify-around lg:flex-row-reverse">
     {/* review */}
     <form onSubmit={""} className= " border-2 border-emerald-500 p-3 rounded-xl mt-8" >
        <div>
          <h1 className='text-4xl text-center border-y-4 border-emerald-200 '>Service Review</h1>
        </div>
           <div className='flex gap-6 '>
                 <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName && user?.displayName } placeholder="name" className="input rounded-md  input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input rounded-md input-bordered" />
        </div>
           </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photoURL' defaultValue={user?.photoURL && user?.photoURL} placeholder="PhotoURL" className="input input-bordered rounded-md" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating(5/5)</span>
          </label>
          <input type="number" name='rating' placeholder="Rating" className="input input-bordered rounded-md" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
         <textarea className="textarea textarea-info rounded-md"  name='review' placeholder="Bio"></textarea>
        </div>
 

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
        </form>
    {/* End review */}
<div className="card  flex flex-col  justify-between bg-base-100 shadow-xl">
    <div className=' w-full border-2 border-gray-700'>
       <img src= {imgage} className="" alt="Album"/>
    </div>
  <div className="card-body pt-0">
    <div className='flex justify-between'>
      <p>Package : {price}</p>
      <p>Rating : {rating}</p>
    </div>
   <div>
        <h2 className="card-title">{title}</h2>
    <p>{description}</p>
   </div>
 
  </div>
</div>
  </div>
</div>
    </div>
  );
};

export default ServiceDetails;