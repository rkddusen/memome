import React from 'react'

interface MemoManageBtnProps {
  children: React.ReactNode
  handleBtnClick(): void
  newStyle?: string
}

const MemoManageBtn: React.FC<MemoManageBtnProps> = ({ children, handleBtnClick, newStyle }) => {
  return (
    <div onClick={handleBtnClick} className={`${newStyle} flex flex-row items-center p-5 border-2 border-black stroke-2 fill-none stroke-black rounded-10 hover:cursor-pointer`}>
      {children}
    </div>
  )
}

export default MemoManageBtn
