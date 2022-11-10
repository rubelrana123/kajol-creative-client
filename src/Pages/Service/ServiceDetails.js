import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import UseTitle from '../../Title/UseTitle';
import { FaStar, FaUser } from "react-icons/fa";
import PublicReview from '../Reviews/PublicReview';
import toast from 'react-hot-toast';
const ServiceDetails = () => {
  const [reviews, setReviews] = useState([{}]);
  const serviceDetails = useLoaderData();
  const {user} = useContext(AuthContext);
  const navigate  = useNavigate();
  UseTitle("Service")
  const {description, rating, imgage, price,_id, title} = serviceDetails;
  console.log(serviceDetails);
  const currentDate =  new Date().toLocaleString();

console.log(reviews);

    fetch(`http://localhost:5000/reviews/${_id}`).then(res => res.json()).then(data => setReviews(data));



  //  console.log(currentDate);

   const handleForm = (e) => {
    e.preventDefault();
    const form =  e.target;
    const rating = form.rating.value;
    const review = form.review.value;

    // console.log(rating, review);

    const reviewObj = {
      serviceId :  _id,
      image : imgage,
      review,
      rating,
       name :  user?.displayName,
       userPhoto : user?.photoURL || <FaUser></FaUser>,
       date : currentDate,
       email : user?.email,
       serviceTitle : title,

    }
    // console.log(reviewObj);


      fetch(`http://localhost:5000/reviews`, {
     method: 'POST',  
    headers: {
    'Content-Type': 'application/json',
   },
  body: JSON.stringify(reviewObj),
})
  .then((response) => response.json())
  .then((data) => {
    if(data.insertedId) {
      
      toast.success("Add Review Successfully", {autoClose : 200})
      form.reset();

    }
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

   }

   const handleLoginButton = () => {
    navigate("/login")
   }



  return (
   <div className='pt-36 bg-gray-800 '>
     <div className='justify-center flex'>
 
            <div className="card object-fill w-3/5 bg-base-100 shadow-xl">
  <figure><img src={imgage} alt="reviewimage" /></figure>
  <div className="card-body pt-2">
    <div className='flex  justify-between '>
      <p> Package : {price}</p>
      <p className='flex '><FaStar className='text-yellow-300 mt-[2px] mr-2'></FaStar> <span className=''>{rating}</span> </p>
    </div>
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
 
  </div>
</div>
     </div>

  <div className='flex justify-evenly'>
       <div className='w-1/3 mt-12'>
          { user?.uid ?
          <>
           <form onSubmit={handleForm} className= " border-2 border-emerald-500 p-3 rounded-xl mt-6 px-18" >
        <div>
          <h1 className='text-md text-gray-100 '>Rate and review purchased Service</h1>
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Rating(5/5)</span>
          </label>
          <input type="text" name='rating' placeholder="Rating" className="input bg-gray-200 input-bordered rounded-md" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Review</span>
          </label>
         <textarea className="textarea textarea-info rounded-md bg-gray-200 "  name='review' placeholder="Please ahare our feedback about this service ?  was the service as describe"></textarea>
        </div>
 

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
        </form>
          
          </>
          :
          <>
            <div className='text-center border-2  py-10 text-white text-2xl'>
            <p>Please Log in to Add a Review</p>
            <button onClick={handleLoginButton} className='btn btn-outline border-2 mt-2 w-24 border-red-500 rounded-md text-white'>Login</button>
          </div>  
          
          </>  
        
        
        
        }


      
     </div>
     <div className='w-2/4 my-4 '>
            <div className=' p-4'>
        <p className='text-2xl text-gray-100'>Service Review : </p>
      </div>
     {   reviews.length < 1 ? <p className='text-xl text-center border-2 text-white w-full'> Empty Review</p>
            :
          reviews.map(review => <PublicReview key={review._id} reviewss={review} ></PublicReview> )
       

        }
  
     </div>

  </div>
   </div>

 
 
    
  );
};

export default ServiceDetails;


/* 
    
*/