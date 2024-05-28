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
  const [star, setStar] = useState<boolean>(false);
  const [folder, setFolder] = useState<number>(0);
  const [tags, setTags] = useState<string[]>(['']);

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
      tags: new Set(tags),
      folder: folder,
      star: star,
    }
    handleSaveMemo(newMemo);
  }
  const favoriteMemo = (): void => {
    setStar(prev => !prev)
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row w-full mb-20 h-30'>
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
        <MemoManageBtn newStyle={'ml-5'} handleBtnClick={favoriteMemo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-16 h-16 stroke-2 stroke-black ${star ? 'fill-star' : 'fill-none'}`}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </MemoManageBtn>
      </div>
      <div className='flex flex-col w-full mb-20'>
        <div className='flex flex-row items-center mb-10 h-30'>
          <SemiTitle title='저장 폴더'>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </SemiTitle>
          <div className='flex items-center justify-between h-full p-5 border w-180 rounded-5 border-gray hover:cursor-pointer'>
            <p className='text-gray text-14'>기본 폴더</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='stroke-2 w-14 h-14 fill-none stroke-gray'
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
        <div className='flex flex-row items-center h-30'>
          <SemiTitle title='태그'>
            <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
          </SemiTitle>
          {/* 태그 컴포넌트 */}
          <p>#태그입력</p>
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

interface SemiTitleComponentProps {
  title: string
  children: React.ReactNode
}
const SemiTitle:React.FC<SemiTitleComponentProps> = ({ title, children }) => {
  return (
    <div className="flex flex-row items-center w-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-2 w-14 h-14 fill-none stroke-gray"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >{ children }</svg>
      <p className='ml-5 text-gray text-14'>{title}</p>
    </div>
  );
}

export default MemoDetail
