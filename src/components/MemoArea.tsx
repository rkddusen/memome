import React, { useState } from "react";
import { MemoInfo } from '../models/Memo';
import MemoItem from './MemoItem';
import MemoNav from './MemoNav';

const tempMemo: MemoInfo = {
  count: 3,
  memo: {
    "2024-05": [
      {
        id: 2,
        title: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        year: 2024,
        month: 5,
        date: 23,
        tags: new Set(["태그1", "태그2", "태그3"]),
        folder: 0,
        star: false,
      },
      {
        id: 1,
        title: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        year: 2024,
        month: 5,
        date: 21,
        tags: new Set(["태그1", "태그2", "태그3"]),
        folder: 1,
        star: true,
      },
    ],
    "2024-04": [
      {
        id: 0,
        title: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        year: 2024,
        month: 4,
        date: 20,
        tags: new Set(["태그1", "태그2", "태그3"]),
        folder: 0,
        star: false,
      },
    ],
  },
};

const MemoArea: React.FC = () => {
  const [memoInfo, setMemoInfo] = useState<MemoInfo>(tempMemo);
  return (
    <div className='py-70 px-50'>
      <MemoNav count={memoInfo.count} />
      {Object.keys(memoInfo.memo).map(g => (
        <div key={g} className='mb-40'>
          <p className='mb-20 text-20'>{g.split('-')[0]}년 {Number(g.split('-')[1])}월</p>
          <div className='grid justify-between w-full gap-x-20 gap-y-30 grid-cols-auto-fill'>
            {memoInfo.memo[g].map(m => (
              <div key={m.id} className=''>
                <MemoItem data={m} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemoArea
