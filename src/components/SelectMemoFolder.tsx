import React, { useEffect, useRef, useState } from "react";
import SVG from './SVG';

interface SelectMemoFolderComponentProps {
  folder: number
  setFolder: React.Dispatch<React.SetStateAction<number>>
}

const SelectMemoFolder: React.FC<SelectMemoFolderComponentProps> = ({ folder, setFolder}) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const [folderArr, setFolderArr] = useState<string[]>(['기본 폴더', '새폴더']);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOpenSelect = (): void => {
    setOpenSelect(prev => !prev);
  }
  const handleClickOutside = (event: MouseEvent): void => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setOpenSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (index: number): void => {
    setFolder(index);
  }

  return (
    <div ref={selectRef} onClick={handleOpenSelect} className="relative flex items-center justify-between h-full p-5 border select-none w-180 rounded-5 border-gray hover:cursor-pointer">
      <p className="text-gray text-14">{folderArr[folder]}</p>
      <SVG svgStyle="stroke-2 w-14 h-14 fill-none stroke-gray">
        {openSelect ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
      </SVG>
      {openSelect && (
        <div className="absolute left-0 w-full top-[30px] bg-white border border-gray rounded-5">
          {folderArr.map((f, i) => (
            <div onClick={() => handleSelect(i)} key={i} className="w-full px-10 py-15 hover:bg-lighter-gray text-12">
              <p>{f}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMemoFolder;
