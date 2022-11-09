 
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import UseTitle from '../../Title/UseTitle';
 
import BlogQuestion from './BlogQuestion';
 



const Blog = () => {
  // const data = useLoaderData();
  UseTitle("Blog")
  const [data, setData] = useState([]);

  fetch("data.json").then(res => res.json()).then(data => setData(data) )
 
  // console.log(data);
 
  return (
    <div className= "mt-20">

  <h1 className='text-blue-700 font-bold text-4xl text-center p-6'>Blog Question</h1>
      {
        data.map( (info) => <BlogQuestion key={info.id} info = {info}></BlogQuestion> )
      }
      
    </div>
  );
};

export default Blog;