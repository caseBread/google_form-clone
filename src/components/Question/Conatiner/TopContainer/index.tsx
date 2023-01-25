import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Dropdown from '../../../common/Dropdown';
import { IoReorderTwoSharp } from 'react-icons/io5';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { AiOutlineAlignLeft, AiFillCheckSquare } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
interface Props {
  questionType: string;
  setQuestionType: Dispatch<SetStateAction<string>>;
}

const DropdownInit = [
  <>
    <IoReorderTwoSharp />
    단답형
  </>,
  <>
    <AiOutlineAlignLeft />
    장문형
  </>,
  <>
    <BsFillRecordCircleFill />
    객관식 질문
  </>,
  <>
    <AiFillCheckSquare />
    체크박스
  </>,
  <>
    <IoMdArrowDropdownCircle />
    드롭다운
  </>,
];

const QuestionTop = ({ questionType, setQuestionType }: Props) => {
  const [dropdownValue, setDropdownValue] = useState('');

  return (
    <div className="flex items-center w-full gap-8">
      <input
        className="w-2/3 focus-input p-4 bg-gray-50 border-b-1"
        type="text"
        defaultValue="제목없는 질문"
        name="question"
      />
      <Dropdown value={dropdownValue} setValue={setDropdownValue} DropdownInit={DropdownInit} />
      <input type="hidden" value={questionType} name="questionType" />
    </div>
  );
};
export default QuestionTop;
