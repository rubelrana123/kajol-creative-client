import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import ServiceItem from './ServiceItem';

const Service = () => {
  
  const [services, setServices] = useState([]);
    useEffect(()=> {
    const uri = `http://localhost:5000/services?size=3`;
    fetch(uri).then(res => res.json()).then(data => {
         
        setServices(data.service);
    } )
    }, [])
  return (
    <div className='bg-gray-800 text-white'>
      <div className='flex justify-center align-middle flex-col'>
         <h1 className='text-center text-5xl py-5  font-semibold'>Services</h1>
         <p className='w-7/12 mx-auto text-center text-lg text-gray-300 '>Our  photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.</p>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 mx-auto justify-center align-middle place-content-center border-emerald-200 py-10 gap-4'>
        {
          services.map(service => <ServiceItem key={service._id} service = {service} ></ServiceItem> )
        }
      </div>
        <div className='flex justify-center py-3 '>
        <Link to="/services">
          <button className="btn glass w-40 btn-outline text-white border-green-300 border-2 shadow-md  text-2xl">See All</button></Link>

        </div>
        <div className="border-b-2 border-gray-700"></div> 
    </div>
  );
};

export default Service;