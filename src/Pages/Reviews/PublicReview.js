import React from 'react';
import { FaStar } from 'react-icons/fa';

const PublicReview = ({reviewss}) => {
  // console.log("hello review", review);
  const {title, email, userPhoto, _id,rating,review, name,date} = reviewss;
  return (
    <div className='mt-5'>

      <div className="  dark:bg-gray-900 rounded-lg dark:text-gray-100">
	<div className="flex flex-col space-y-4 p-3 md:space-y-0 md:space-x-6 md:flex-col">
       <div className='flex gap-3 '>
        		<img src={userPhoto} alt="" className="self-center flex-shrink-0 w-10 h-10 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
			<h4 className="text-lg font-semibold text-center md:text-left">{name}</h4>
      <p className='flex mt-2'><FaStar className='text-yellow-300 mt-[2px] mr-2'></FaStar> <span className=''>{rating}</span> </p>
      <p className='mt-2'>{date}</p>
       </div>
		<div className="flex flex-row">
			<p className="dark:text-gray-400 ml-8">{review}</p>
		</div>
	</div>
 
</div>
    </div>
  );
};

export default PublicReview;