import React from 'react';

const Gallary = () => {
    const GallaryPhoto = [
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/wedding3.jpg",
 
    },
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/weeding255520_960_720.jpg",
 
    },
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/couple.jpg",
 
    },
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/couple.jpg",
 
    },
    {
        image :  "https://raw.githubusercontent.com/rubelrana123/phographer/main/meatloaf-3747129_960_720.jpg",
    },
    {
        image :  "https://raw.githubusercontent.com/rubelrana123/phographer/main/birthday.jpg",
    },
  
  
]
  return (
    <div className='bg-slate-600'>
      		<div className="max-w-2xl mx-auto mb-16  py-5 text-center">
			<h2 className="text-4xl font-bold text-white lg:text-5xl">Gallary</h2>
			 
		</div>
       <div class="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-auto">

        {
          GallaryPhoto.map(photo => {
            return (
                        <div class="w-full rounded">
        <img src= {photo.image}
            alt="gallary"/>
         </div>

            )


          })
        }


</div>
    </div>
  );
};

export default Gallary;