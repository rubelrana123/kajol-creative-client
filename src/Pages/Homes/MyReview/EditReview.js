import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
  const {id} = useParams();
 const navigate = useNavigate();
  const [reviews, setReviews] = useState({});
  // console.log(reviews);
  const currentDate =  new Date().toLocaleString();
  useEffect(() => {
    fetch(`https://kajolcreative.vercel.app/reviewsEdit/${id}`).then(res => res.json()).then(data => setReviews(data))
  }, [id])
 
   const handleForm = (e) => {
    e.preventDefault();
    const form =  e.target;
    const rating = form.rating.value;
    const review = form.review.value;
 
    const reviewObj = {
      review,
      rating,
     date : currentDate,
   }
    fetch(`https://kajolcreative.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(reviewObj)
    }).then(res => res.json())
    .then(data => {
      
  
        if(data.acknowledged) {
        
             form.reset();
         toast.success("Review Edit Succeddfully " , {autoClose : 200})
               navigate("/myReview")
   
            }
       
    })
    .catch(err => console.log(err))
 

  }
  return (
    <div className='w-2/4 mx-auto mt-40'>
         <div className='text-4xl'>
          Edit Your Review
         </div>
           <form onSubmit={handleForm} className= " border-2 border-emerald-500 p-3 rounded-xl   px-18" >
        <div>
          <h1 className='text-md text-gray-100 '>Rate and review purchased Service</h1>
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Rating(5/5)</span>
          </label>
          <input type="text" defaultValue={reviews?.rating} name='rating' placeholder="Rating" className="input bg-gray-200 input-bordered rounded-md" />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text text-gray-300">Review</span>
          </label>
         <textarea defaultValue={reviews?.review} className="textarea textarea-info rounded-md bg-gray-200 "  name='review' placeholder="Please ahare our feedback about this service ?  was the service as describe"></textarea>
        </div>
 

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
        </form>
    </div>
  );
};

export default EditReview;