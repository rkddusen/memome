import React from 'react'
import SVG from './SVG'

// btnNum은 버튼 인덱스.
// btnNum이 -1이면 folder를 추가해야한다는 의미
interface FolderBtnComponentProps {
  btnNum: number,
  select: number,
  folder: string,
  handleChangeFolder: (f: number) => void,
  handleAddFolder?: never, // handleAddFolder는 존재하지 않음
}

interface AddFolderBtnComponentProps {
  btnNum: number,
  select: number,
  folder: string,
  handleChangeFolder?: never, // handleChangeFolder는 존재하지 않음
  handleAddFolder: () => void,
}

const FolderBtn:React.FC<FolderBtnComponentProps | AddFolderBtnComponentProps> = ({ btnNum, select, folder, handleChangeFolder, handleAddFolder}) => {
  return (
    <div
      className={`w-[calc(100% - 20px)] mx-10 my-5 h-60 rounded-10 ${select + 1 === btnNum ? 'bg-white text-black' : 'bg-none text-gray'} hover:cursor-pointer hover:border-2 hover:border-white hover:text-black`}
      onClick={handleChangeFolder ? () => handleChangeFolder(btnNum) : handleAddFolder}>
      <div className={`flex flex-row items-center justify-center h-full`}>
        {btnNum === -1 ?
          <SVG svgStyle='w-16 h-16 mr-5 stroke-2 fill-none stroke-gray'>
            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
          </SVG>
          : null}
        {folder}
      </div>
    </div>
  )
}

export default FolderBtn
