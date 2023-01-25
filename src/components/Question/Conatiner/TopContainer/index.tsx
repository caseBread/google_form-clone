import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Dropdown from '../../../common/Dropdown';
import { IoReorderTwoSharp } from 'react-icons/io5';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { AiOutlineAlignLeft, AiFillCheckSquare } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import { IDropdownInit } from '../../../../types/dropdown';
interface Props {
  questionType: string;
  setQuestionType: Dispatch<SetStateAction<string>>;
}

const DropdownInit = [
  {
    id: 0,
    content: (
      <>
        <IoReorderTwoSharp />
        단답형
      </>
    ),
  },
  {
    id: 1,
    content: (
      <>
        <AiOutlineAlignLeft />
        장문형
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <BsFillRecordCircleFill />
        객관식 질문
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        <AiFillCheckSquare />
        체크박스
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        <IoMdArrowDropdownCircle />
        드롭다운
      </>
    ),
  },
];

const QuestionTop = ({ questionType, setQuestionType }: Props) => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownInit>(DropdownInit[0]);

  const handleDropdownValue = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setQuestionType(e.currentTarget.innerText);
      if (e.currentTarget.dataset['id']) {
        const id = Number(e.currentTarget.dataset['id']);
        setDropdownValue(DropdownInit[id]);
      }
    },
    [setQuestionType]
  );

  return (
    <div className="flex items-center w-full gap-8">
      <input
        className="w-2/3 focus-input p-4 bg-gray-50 border-b-1"
        type="text"
        defaultValue="제목없는 질문"
        name="question"
      />
      <Dropdown value={dropdownValue} handleValue={handleDropdownValue} DropdownInit={DropdownInit} />
      <input type="hidden" value={questionType} name="questionType" />
    </div>
  );
};
export default QuestionTop;
