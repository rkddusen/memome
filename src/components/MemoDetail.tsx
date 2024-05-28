import React, { useState } from 'react'
import { Memo } from '../models/Memo'
import MemoManageBtn from './MemoManageBtn';

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
      <div className='flex flex-row w-full mb-5 h-30'>
        <MemoManageBtn handleBtnClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className='w-16 h-16 stroke-2 fill-none stroke-black'
            strokeLinecap="round"
            strokeLinejoin="round">
              <path d="M19 12H6M12 5l-7 7 7 7"/>
          </svg>
        </MemoManageBtn>
        <MemoManageBtn newStyle={'ml-5'} handleBtnClick={saveMemo}>
          <p>저장</p>
        </MemoManageBtn>
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
