import React from 'react'

interface MemoNavComponentProps {
    count: number,
    handleNewMemoOpen(): void,
  }

const MemoNav: React.FC<MemoNavComponentProps> = ({ count, handleNewMemoOpen }) => {
  return (
    <div className='flex items-center justify-between h-30 mb-30'>
      <div className='flex flex-row'>
        <p className='font-bold text-25'>모든 폴더({count})</p>
        <div onClick={handleNewMemoOpen} className='flex flex-row items-center p-5 ml-10 border-1.5 border-black stroke-2 fill-none stroke-black rounded-10 hover:cursor-pointer'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-20 h-20 stroke-1.5 fill-none stroke-black'
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <p>새 메모 추가</p>
        </div>
      </div>
    </div>
  )
}

export default MemoNav
