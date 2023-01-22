import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { BsCircle, BsSquare } from 'react-icons/bs';

const ObjectiveOption = ({ optionType, id }: { optionType: React.ReactNode; id: number }) => {
  const [icons, setIcons] = useState<React.ReactNode>();

  useEffect(() => {
    switch (optionType) {
      case '객관식 질문':
        setIcons(<BsCircle />);
        break;
      case '체크박스':
        setIcons(<BsSquare />);
        break;
      case '드롭다운':
        setIcons(id);
        break;
      default:
        throw new Error('없는 유형입니다.');
    }
  }, [id, optionType]);
  return (
    <div className="flex gap-4 items-center">
      <div className="w-6">{icons}</div>
      <input
        className="focus-input w-full p-2 border-b-1 border-white hover:border-gray-200"
        type="text"
        defaultValue="옵션"
      />
      <button className="button-shadow">
        <FiX />
      </button>
    </div>
  );
};
export default ObjectiveOption;
