import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../Title/UseTitle';

const AllServiceItem = ({service}) => {
  UseTitle("Services")
  console.log(service);
  const {imgage, description,price, _id, title
} = service;
  return (
    <div>
       
      <div className='place-content-center flex border-spacing-4 '>
        <div className="card card-compact w-96   shadow-2xl border-emerald-200  border-solid border-2">
          <figure><img src={imgage} alt="PhotoGraphy" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
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

export default AllServiceItem;