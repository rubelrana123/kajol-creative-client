import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext/UserContext';
import UseTitle from '../../../Title/UseTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
	const {user , logOut} = useContext(AuthContext);
	const navigate = useNavigate();
  UseTitle("Review");
  const [reviews, setReviews] = useState([]);

	useEffect(()=> {
		fetch(`http://localhost:5000/reviews?email=${user?.email}`,
		 {
    headers : {
        authorization : `Bearer ${localStorage.getItem("token-jwt")}`
    }
   }).then(res => {
    if(res.status === 403 || res.status=== 401){
        return logOut();
    }
    return res.json();
   }).then(data => {
    console.log(data);
    return setReviews(data);
   })

 }, [user?.email])
 

	     const handleDelete = (id,serviceId, title) => {
				console.log("Delete", id,serviceId,  title);
				const process = window.confirm(`Are you sure delete your ${title} review`);
				if(process) {

	   fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {


			 if (data.deletedCount === 1) {
				const remaining = reviews.filter(review => review._id !== id );
				setReviews(remaining);
       toast.success("Successfully deleted one document.", {autoClose : 400});
    }
     
      
        // setRefresh(!refresh);
      
  
    }).catch(err => toast.error(err.message))


				}

  };


	const handleEdit = (id) => {
		 navigate(`/myReviews/${id}`);

	}
  return (
    <div className='pt-24 bg-gray-700'>
         {
					reviews.length === 0 ? <div className='py-[18%] text-white text-4xl text-center'>No Review where Added</div> : 
					reviews.map(review => <MyReviewCard key={review._id} handleEdit={handleEdit} user={user} handleDelete={handleDelete} myReview={review}></MyReviewCard> )
				 }
    </div>
  );
};

export default MyReview;