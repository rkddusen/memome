import React, { useEffect, useState } from "react";
import { Memo, MemoInfo } from '../models/Memo';
import MemoItem from './MemoItem';
import MemoNav from './MemoNav';
import MemoDetail from './MemoDetail';

const tempMemo: MemoInfo = {
  count: 3,
  folder: -1,
  lastId: 3,
  memo: {
    "2024-05": [
      {
        id: 3,
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
        id: 2,
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
        id: 1,
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

interface MemoAreaComponentProps {
  nowFolder: number,
}

const MemoArea: React.FC<MemoAreaComponentProps> = ({ nowFolder }) => {
  const [memoInfo, setMemoInfo] = useState<MemoInfo>(tempMemo);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const INITIAL_MEMO = {
    id: 0,
    title: '',
    content: '',
    year: 0,
    month: 0,
    date: 0,
    tags: new Set(''),
    folder: 0,
    star: false,
  }
  const [nowMemo, setNowMemo] = useState<Memo>(INITIAL_MEMO);

  useEffect(() => {
    // folder 바뀔 때 해당 folder에 저장된 메모만 저장
    setMemoInfo(prev => ({...prev, folder: nowFolder}));
  }, [nowFolder]);

  const handleNewMemoOpen = (): void => {
    // 메모를 추가하기 위한 MemoDetail 출력
    setIsCreated(true);
  }
  const handleMemoOpen = (memo: Memo): void => {
    setNowMemo(memo);
  }
  const handleBack = (): void => {
    // MemoDetail에서 뒤로가기 버튼을 클릭했을 때 돌아오기
    setIsCreated(false);
    setNowMemo (INITIAL_MEMO) ;
  }
  const handleSaveMemo = (memo: Memo): void => {
    // 메모 저장
    let _memoInfo = {...memoInfo};
    _memoInfo['count']++;
    _memoInfo['lastId']++;
    let fullDate = memo.year + '-' + (memo.month < 10 ? '0' + memo.month : memo.month);
    _memoInfo['memo'][fullDate].length === 0 ? _memoInfo['memo'][fullDate] = [memo] : _memoInfo['memo'][fullDate].unshift(memo);
    setIsCreated(false);
    setMemoInfo(_memoInfo);
  }

  return (
    <div className='w-full h-full py-70 px-50'>
      {isCreated || nowMemo.id > 0 ? (
        <MemoDetail handleBack={handleBack} handleSaveMemo={handleSaveMemo} lastId={memoInfo['lastId']} data={nowMemo} />
      ) : (
        <>
          <MemoNav count={memoInfo.count} handleNewMemoOpen={handleNewMemoOpen} />
          {Object.keys(memoInfo.memo).map(g => (
            <div key={g} className='mb-40'>
              <p className='mb-20 text-20'>{g.split('-')[0]}년 {Number(g.split('-')[1])}월</p>
              <div className='grid justify-between w-full gap-x-20 gap-y-30 grid-cols-auto-fill'>
                {memoInfo.memo[g].map(m => (
                  <MemoItem key={m.id} data={m} handleMemoOpen={handleMemoOpen} />
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default MemoArea
