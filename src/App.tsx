import React, { useState } from 'react';
import './App.css';
import MemoArea from './components/MemoArea';
import Nav from './components/Nav';

const App:React.FC = () => {
  const [nowFolder, setNowFolder] = useState<number>(-1);

  return (
    <div className='flex flex-row w-full h-full'>
      <div className='shrink-0'>
        <Nav setNowFolder={setNowFolder} />
      </div>
      <MemoArea nowFolder={nowFolder} />
    </div>
  );
}

export default App;
