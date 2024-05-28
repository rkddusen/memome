import React from 'react'
import MemoManageBtn from './MemoManageBtn'

interface MemoNavComponentProps {
    count: number,
    handleNewMemoOpen(): void,
  }

const MemoNav: React.FC<MemoNavComponentProps> = ({ count, handleNewMemoOpen }) => {
  return (
    <div className='flex items-center justify-between mb-30'>
      <div className='flex flex-row'>
        <p className='font-bold text-25'>모든 폴더({count})</p>
        <MemoManageBtn newStyle={'ml-5'} handleBtnClick={handleNewMemoOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-16 h-16 stroke-1.5 fill-none stroke-black'
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <p className='px-2'>새 메모 추가</p>
        </MemoManageBtn>
      </div>
    </div>
  )
}

export default MemoNav
