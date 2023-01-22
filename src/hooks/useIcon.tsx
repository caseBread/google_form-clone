import React, { useEffect, useState } from 'react';
import { BsCircle, BsSquare } from 'react-icons/bs';

const useIcon = ({ optionType, dropdownIndex }: { optionType: string; dropdownIndex?: number }) => {
  const [icon, setIcon] = useState<JSX.Element>();
  useEffect(() => {
    switch (optionType) {
      case '객관식 질문':
        setIcon(<BsCircle />);
        break;
      case '체크박스':
        setIcon(<BsSquare />);
        break;
      case '드롭다운':
        setIcon(<>{dropdownIndex}</>);
        break;
      default:
        throw new Error('없는 유형입니다.');
    }
  }, [dropdownIndex, optionType]);

  return icon;
};

export default useIcon;
