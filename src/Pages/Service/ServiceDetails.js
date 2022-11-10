import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import UseTitle from '../../Title/UseTitle';
import { FaStar, FaUser } from "react-icons/fa";
import PublicReview from '../Reviews/PublicReview';
import toast from 'react-hot-toast';
const ServiceDetails = () => {
  const [reviews, setReviews] = useState([{}]);
  const serviceDetails = useLoaderData();
  const {user} = useContext(AuthContext);
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

     // const handleDelete = (id) => {
  //   fetch(`http://localhost:5000/product/${id}`, {
  //     method: "DELETE",
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.success){
  //       toast.success(data.message);
  //       setRefresh(!refresh);
  //     } else {
  //       toast.error(data.error);
  //     }
  //   }).catch(err => toast.error(err.message))
  // };


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

  <div className='flex justify-evenly'>
       <div className='w-1/3'>


       <form onSubmit={handleForm} className= " border-2 border-emerald-500 p-3 rounded-xl mt-6 px-18" >
        <div>
          <h1 className='text-md  '>Rate and review purchased Service</h1>
        </div>
           <div className='flex gap-6 '>
            {/* { !user?.displayName &&
                        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  placeholder="name" className="input rounded-md  input-bordered" />
        </div>
            
            } */}

            {/* {
              !user?.email && 
                      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input rounded-md input-bordered" />
        </div>
            } */}
 


           </div>
           {/* {
            !user?.photoURL &&
                    <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photoURL'   placeholder="PhotoURL" className="input input-bordered rounded-md" />
        </div>


           } */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating(5/5)</span>
          </label>
          <input type="text" name='rating' placeholder="Rating" className="input input-bordered rounded-md" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
         <textarea className="textarea textarea-info rounded-md"  name='review' placeholder="Please ahare our feedback about this service ?  was the service as describe"></textarea>
        </div>
 

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
        </form>
     </div>
     <div className='w-2/4 my-4 '>
            <div className=' p-4'>
        <p className='text-2xl '>Service Review : </p>
      </div>
     {   reviews.length < 1 ? <p className='text-xl text-center'>Empty Review</p>
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