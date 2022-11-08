import React from 'react';
 
 import BannerItem from './BannerItem'
const Banner = () => {
  const bannerData = [
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/wedding3.jpg",
        prev: 6,
        id: 1,
        next: 2,
        title : "We Shoot Happiness"
    },
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/weeding255520_960_720.jpg",
        prev: 1,
        id: 2,
        next: 3,
        title : `Patience is the key to the Best Shot.`
    },
    {
        image: "https://raw.githubusercontent.com/rubelrana123/phographer/main/couple.jpg",
        prev: 2,
        id: 3,
        next: 1,
              title : `Love the life you live`
    },
  
]
  return (
    <div>
      <div className="carousel w-full  ">

        {
          bannerData.map(sliderInfo =>   <BannerItem key={sliderInfo.id} slide= {sliderInfo}></BannerItem> )
        }
      

   
   
   
   
</div>
    </div>
  );
};

export default Banner;