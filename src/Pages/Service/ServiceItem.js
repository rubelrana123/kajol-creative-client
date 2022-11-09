import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceItem = ({service}) => {
  console.log(service);
  const {imgage, description,price, _id, title
} = service;
  return (
    <div>
       
      <div className='place-content-center flex border-spacing-4 '>
        <div className="card card-compact w-96   shadow-2xl border-emerald-200  border-solid border-2">
          <PhotoProvider>
      <div className="foo">
       
          <PhotoView src={imgage}  >
            <img src={imgage} alt="" />
          </PhotoView>
        
      </div>
    </PhotoProvider>
          {/* <figure><img src={imgage} alt="Shoes" /></figure> */}
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{ description.length > 100 && description.slice(1,120) + "....."  }</p>
            <div className="card-actions justify-between">
              <p className='text-2xl'>Package :{price} BDT</p>
              
              <Link to={`/serviceDetails/${_id}`}>

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