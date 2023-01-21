import React, { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { IoReorderTwoSharp } from 'react-icons/io5';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { AiOutlineAlignLeft, AiFillCheckSquare } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import UseOutsideClick from '../../../../hooks/UseOutsideClick';
import Dropdown from '../../../common/Dropdown';

interface Props {
  questionType: string;
  setQuestionType: Dispatch<SetStateAction<string>>;
}

const QuestionTop = ({ questionType, setQuestionType }: Props) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = UseOutsideClick(dropdownRef, false);

  const handleQuestionType = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setQuestionType(e.currentTarget.innerText);
    },
    [setQuestionType]
  );

  const handleShowDropdown = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, [setShowDropdown]);

  return (
    <div className="flex items-center w-full gap-8">
      <input className="w-2/3 focus-input p-4 bg-gray-50 border-b-1" type="text" defaultValue="제목없는 질문" />
      <div className="w-1/3 p-3 border-gray-300 border-1 rounded-sm" onClick={handleShowDropdown} ref={dropdownRef}>
        <div className="flex justify-between items-center">
          <div>{questionType}</div>
          <RiArrowDropDownFill />
        </div>
        <div className={`${!showDropdown && 'hidden'}`}>
          <Dropdown>
            <div className="flex items-center gap-2" onClick={handleQuestionType}>
              <IoReorderTwoSharp />
              단답형
            </div>
            <div className="flex items-center gap-2" onClick={handleQuestionType}>
              <AiOutlineAlignLeft />
              장문형
            </div>
            <div className="flex items-center gap-2" onClick={handleQuestionType}>
              <BsFillRecordCircleFill />
              객관식 질문
            </div>
            <div className="flex items-center gap-2" onClick={handleQuestionType}>
              <AiFillCheckSquare />
              체크박스
            </div>
            <div className="flex items-center gap-2" onClick={handleQuestionType}>
              <IoMdArrowDropdownCircle />
              드롭다운
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default QuestionTop;
