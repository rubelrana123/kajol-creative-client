import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';
const ServiceItem = ({service}) => {
  console.log(service);
  const {imgage, description,price,rating, _id, title
} = service;
  return (
    <div>
       
      <div className='place-content-center flex border-spacing-4 '>
        <div className="card card-compact w-96   shadow-2xl border-emerald-200  border-solid border-2">
          <PhotoProvider>
      <div className="foo">
       
          <PhotoView src={imgage}  >
            <img className='rounded-xl' src={imgage} alt="" />
          </PhotoView>
        
      </div>
    </PhotoProvider>
          {/* <figure><img src={imgage} alt="Shoes" /></figure> */}
          <div className="card-body">
            <div className='flex gap-5'>
                 <h2 className="card-title">{title}</h2>  
                    <p className='flex mt-2'><FaStar className='text-yellow-300 mt-[2px] mr-2'></FaStar> <span className=''>{rating}</span> </p>
            </div>
         
            <p>{ description.length > 100 && description.slice(1,120) + "....."  }</p>
            <div className="card-actions justify-between">
              <p className='text-2xl'>Package :{price} BDT</p>
              
              <Link to={`/service/${_id}`}>

              <button className="btn btn-outline btn-primary rounded-md">Details</button>

              </Link>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceItem;