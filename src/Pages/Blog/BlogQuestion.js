import React, {useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
 

const BlogQuestion = ({info}) => {
 
    const {question , anwser } = info;
   const [open , setOpen] = useState(true);
  return (
		<div >
      <div className='flex align-center justify-center flex-col'>
			<div  onClick={() => setOpen(!open)} className='flex justify-between py-5 px-2 w-full border'>
				<h1><span className='text-red-700'>Question : </span> {question}</h1>
				<div className='h-6 w-6 text-blue-500'>
          {
            open ? <FaPlus/> : <FaMinus/>
          }
				</div>
			</div>
      <div className={open ? 'hidden' : 'block ' }>
        <h1 className='text-start p-2  '> <span className='text-red-600 font-semibold'>Ans :</span> {anwser}</h1>
      </div>
		</div>
    </div>
	);
};

export default BlogQuestion;