import React, { useState } from 'react'
import { Memo } from '../models/Memo'

interface MemoDetailComponentProps {
    handleBack(): void,
    handleSaveMemo(memo: Memo): void,
    lastId: number,
  }

const MemoDetail: React.FC<MemoDetailComponentProps> = ({ handleBack, handleSaveMemo, lastId }) => {
  const [titleInput, setTitleInput] = useState<string>('');
  const [contentInput, setContentInput] = useState<string>('');

  const TITLE = 0, CONTENT = 1;

  const handleChangeMemo = (type: number, e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if(type === TITLE){
      setTitleInput(e.target.value);
    } else if(type === CONTENT){
      setContentInput(e.target.value);
    }
  }
  const saveMemo = (): void => {
    let newMemo = {
      id: lastId + 1,
      title: titleInput,
      content: contentInput,
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
      tags: new Set(''),
      folder: 0,
      star: false,
    }
    handleSaveMemo(newMemo);
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row w-full mb-5 h-36'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className='p-5 mb-20 border-1.5 border-black stroke-2 w-36 h-36 fill-none stroke-black rounded-10 hover:cursor-pointer'
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={handleBack}>
            <path d="M19 12H6M12 5l-7 7 7 7"/>
        </svg>
        <div onClick={saveMemo} className='flex flex-row items-center ml-5 px-10 border-1.5 border-black h-36 rounded-10 hover:cursor-pointer'>
          <p>저장</p>
        </div>
      </div>
      <input
        type='text'
        value={titleInput}
        placeholder={'제목을 입력하세요.'}
        onChange={(e) => handleChangeMemo(TITLE, e)}
        className='w-full font-bold text-25 outline-0' />
      <textarea
        value={contentInput}
        placeholder={'내용을 입력하세요.'}
        onChange={(e) => handleChangeMemo(CONTENT, e)}
        className='w-full h-full mt-20 resize-none text-16 outline-0' />
    </div>
  )
}

export default MemoDetail
