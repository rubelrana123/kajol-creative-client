import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/UserContext/UserContext';
import UseTitle from '../../../Title/UseTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
	const {user} = useContext(AuthContext);
  UseTitle("Review");
const [reviews, setReviews] = useState([]);

	useEffect(()=> {
		fetch(`http://localhost:5000/reviews?email=${user?.email}`).then(res => res.json()).then(data => setReviews(data))
	}, [user.email])

	     const handleDelete = (id, title) => {
				console.log("Delete", id, title);
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
  return (
    <div className='mt-24'>
         {
					reviews.map(review => <MyReviewCard key={review._id} user={user} handleDelete={handleDelete} myReview={review}></MyReviewCard> )
				 }
    </div>
  );
};

export default MyReview;