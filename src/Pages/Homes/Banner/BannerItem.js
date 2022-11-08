import React from 'react';

import './Banner.css'
const BannerItem = ({slide}) => {
    const {image, id, prev, next, title} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-[100%]     ">
                <div className='carousel-img w-full'>
                    <img src={image} alt="" className="w-[100%]     " />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <h1 className='text-6xl font-bold font-serif uppercase text-gray-100'>
                    {title}
                    </h1>
                </div>
 
          
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;