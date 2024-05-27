import React, { useState } from 'react'
import FolderBtn from './FolderBtn';

const tempFolder = ['모든 폴더', '기본 폴더'];

interface NavComponentProps {
    setNowFolder: React.Dispatch<React.SetStateAction<number>>;
  }

const Nav:React.FC<NavComponentProps> = ({ setNowFolder }) => {
  const [folder, setFolder] = useState<string[]>(tempFolder);
  const [select, setSelect] = useState<number>(-1);

  const handleChangeFolder = (f: number): void => {
    setSelect(f - 1);
    setNowFolder(f - 1);
  }
  const handleAddFolder = (): void => {

  }

  return (
    <div className='flex flex-col h-full w-300 bg-light-blue shrink-0'>
      <div className='flex items-center justify-center w-full h-165'>
        <img className='h-25' src={process.env.PUBLIC_URL + `/images/memome_logo.png`} alt='' />
      </div>
      <div className='w-full h-full overflow-y-scroll scrollbar-hide'>
        {folder.map((f, i) => (
          <div key={i}>
            <FolderBtn
              btnNum={i}
              select={select}
              folder={f}
              handleChangeFolder={handleChangeFolder} />
          </div>
        ))}
        <div>
          <FolderBtn
            btnNum={-1}
            select={select}
            folder={'새 폴더 생성'}
            handleChangeFolder={handleAddFolder} />
        </div>
      </div>
    </div>
  )
}

export default Nav
