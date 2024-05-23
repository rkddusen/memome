import React from 'react'

interface MemoNavComponentProps {
    count: number;
  }

const MemoNav: React.FC<MemoNavComponentProps> = ({ count }) => {
  return (
    <div className='flex items-center justify-between h-30 mb-30'>
      <div>
        <p className='font-bold text-25'>모든 폴더({count})</p>
      </div>
    </div>
  )
}

export default MemoNav
