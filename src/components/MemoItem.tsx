import React from "react";
import { Memo } from '../models/Memo';

interface MemoComponentProps {
  data: Memo,
}
const MemoItem: React.FC<MemoComponentProps> = ({ data }) => {
  return (
    <div className='w-200 hover:cursor-pointer'>
      <div className='relative w-full mb-5 border p-15 h-160 rounded-10 border-light-gray'>    
        <div className='w-full h-full overflow-y-hidden select-none'>
          <p className='mb-5 text-14'>{data.title}</p>
          <p className='text-13 line-clamp-[8]'>{data.content}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`absolute right-[5px] top-[5px] w-18 h-18 storke-2 ${data.star ? 'stroke-star fill-star' : 'stroke-lighter-gray fill-lighter-gray'}`}
          strokeLinecap="round"
          strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <div className='text-center'>
        <p className='mb-5 text-12 text-gray'>{data.folder}</p>
        <p className='mb-10 text-14 line-clamp-1'>{data.title}</p>
        <p className='text-12 text-gray'>{data.year}. {data.month}. {data.date}</p>
      </div>
    </div>
  );
}

export default MemoItem