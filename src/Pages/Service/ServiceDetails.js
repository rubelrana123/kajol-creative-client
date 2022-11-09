import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import UseTitle from '../../Title/UseTitle';
import { FaStar } from "react-icons/fa";
const ServiceDetails = () => {
  UseTitle("Service")
  const serviceDetails = useLoaderData();
  const {description, rating, imgage, price, title} = serviceDetails;
  console.log(serviceDetails);
  const {user} = useContext(AuthContext);
  return (
   <div className='pt-36 '>
     <div className='justify-center flex'>
 
            <div className="card object-fill w-3/5 bg-base-100 shadow-xl">
  <figure><img src={imgage} alt="Shoes" /></figure>
  <div className="card-body pt-2">
    <div className='flex  justify-between'>
      <p> Package : {price}</p>
      <p className='text-yellow-200 flex'> <FaStar className='mt-1 mr-2'></FaStar>  {rating}</p>
    </div>
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
 
  </div>
</div>
     </div>

     <div>


       <form onSubmit={""} className= " border-2 border-emerald-500 p-3 rounded-xl mt-6 px-18" >
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
     </div>
   </div>

 
 
    
  );
};

export default ServiceDetails;


/* 
    
*/