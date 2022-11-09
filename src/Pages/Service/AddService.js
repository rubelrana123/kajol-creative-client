import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddService = () => {

  const [services, setServices] = useState();

  useEffect(()=> {
    fetch(`http://localhost:5000/services`).then(res => res.json()).then(data => setServices(data));

   })
console.log("service", services);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const servicePhoto = form.photoURL.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
   


    const service = {
      title,
      imgage : servicePhoto,
      description,
      rating,
      price,
    }
    console.log(service);
    fetch(`http://localhost:5000/services`, {
     method: 'POST',  
    headers: {
    'Content-Type': 'application/json',
   },
  body: JSON.stringify(service),
})
  .then((response) => response.json())
  .then((data) => {
    if(data.insertedId) {
      
      toast.success("Add New Product Successfully", {autoClose : 200})
      form.reset();

    }
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  }
  return (
    <div className='py-40 px-20'>
            <form onSubmit={handleForm} className= " border-2 border-emerald-500 p-3 rounded-xl mt-8" >
        <div>
          <h1 className='text-4xl text-center  border-double border-emerald-200 '>Add Your New Service</h1>
        </div>
       
          <div className="form-control">
          <label className="label">
            <span className="label-text"> Service Name</span>
          </label>
          <input type="text" name='name'   placeholder="name" className="input rounded-md  input-bordered" />
        </div>
 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service PhotoURL</span>
          </label>
          <input type="text" name='photoURL'   placeholder="PhotoURL" className="input input-bordered rounded-md" />
        </div>
        <div className='flex justify-start gap-5'>
         <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Package </span>
          </label>
          <input type="number" name='price' placeholder="Package Price" className="input input-bordered rounded-md" />
        </div>

         <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text"> Averge Rating(5/5)</span>
          </label>
           
          <input type="text" name='rating' placeholder="Rating" className="input input-bordered rounded-md" />
        </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea className="textarea textarea-info rounded-md"  name='description' placeholder="Type description"></textarea>
        </div>
 

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Submit</button>
        </div>
        </form>
    </div>
  );
};

export default AddService;