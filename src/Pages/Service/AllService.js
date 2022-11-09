import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllServiceItem from './AllServiceItem';
 

const AllService = () => {
  const {service} = useLoaderData();
  console.log(service);
  
  return (
  <div className='bg-gray-700 pt-28 text-white'>
      <div className='flex justify-center align-middle flex-col'>
         <h1 className='text-center text-5xl py-5 text-gray-300 font-semibold'>Services</h1>
         <p className='w-7/12 mx-auto text-center text-2xl '>Our  photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.</p>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto justify-center align-middle place-content-center border-emerald-200 py-10 gap-4'>
        {
          service.map(eachService => <AllServiceItem key={eachService._id} service = {eachService} ></AllServiceItem> )
        }
      </div>
        
    </div>
  );
};

export default AllService;