import React, { useEffect, useRef } from 'react'
import SVG from './SVG'

interface InputMemoTagsComponentProps {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}

const InputMemoTags: React.FC<InputMemoTagsComponentProps> = ({ tags, setTags}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let _tags = [...tags];
    _tags[tags.length - 1] = event.target.value;
    setTags(_tags);
  }
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter') {
      // input 한글 두번씩 입력되던 현상 해결
      if(event.nativeEvent.isComposing){
        return;
      }
      handleOpenNextInput();
    }
  }
  const handleOpenNextInput = () => {
    if(tags[tags.length - 1] !== '')
      setTags(prev => [...prev, '']);
  }

  useEffect(() => {
    if(tags.length > 1)
      inputRef.current?.focus();
  }, [tags.length]);

  const handleFocusInput = (index: number): void => {
    if(index === tags.length - 1)
      inputRef.current?.focus();
  }

  const handleTagDelete = (index: number): void => {
    let _tags = [...tags];
    _tags.splice(index, 1);
    setTags(_tags);
  }

  return (
    <div className='flex flex-row flex-wrap justify-start w-full overflow-y-hidden'>
      {tags.map((t, i) => (
        <div key={i} className={`flex flex-row items-center ${t === '' ? 'text-gray' : 'text-black'}`}>
          <div onClick={() => handleFocusInput(i)} className={`flex flex-row items-center ${i !== tags.length - 1 && 'border-b'}`}>
            <SVG svgStyle={`stroke-2 w-14 h-14 fill-none ${i !== tags.length - 1 ? 'stroke-black' : 'stroke-gray'}`}>
              <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
            </SVG>
            <span>{t}</span>
            {i === tags.length - 1 && (
              <input
                className={`bg-white outline-none w-1 text-white caret-black`}
                key={i}
                type='text'
                value={t}
                ref={inputRef}
                onChange={(e) => handleInputChange(e)}
                onBlur={handleOpenNextInput}
                onKeyDown={(e) => handleEnter(e)} />
            )}
            {t === '' && (
              <span>태그입력</span>
            )}
          </div>
          {i !== tags.length - 1 && (
            <div onClick={() => handleTagDelete(i)}>
              <SVG svgStyle='w-16 h-16 stroke stroke-gray hover:cursor-pointer ml-2 mr-5'>
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
              </SVG>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default InputMemoTags
