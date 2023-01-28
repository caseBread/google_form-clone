import React, { useCallback, useState } from 'react';
import { IDropdownInit } from '../../../types/dropdown';
import { Option } from '../../../types/question';
import Dropdown from '../../common/Dropdown';
import ObjectiveOptionPreview from '../ObjectiveOption';
import SubjectiveOptionPreview from '../SubjectiveOption';

const OptionView = ({ type, options }: { type: string; options: Option[] }) => {
  const [dropdownValue, setDropdownValue] = useState<IDropdownInit>(options[1]);
  const handleDropdownValue = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const id = Number(e.currentTarget.dataset['id']);
      setDropdownValue(options[id]);
    },
    [options]
  );

  switch (type) {
    case '단답형':
    case '장문형':
      return <SubjectiveOptionPreview />;
    case '객관식 질문':
    case '체크박스':
      return <ObjectiveOptionPreview type={type} options={options} />;
    case '드롭다운':
      const DropdownInit: IDropdownInit[] = options;
      return <Dropdown value={dropdownValue} handleValue={handleDropdownValue} DropdownInit={DropdownInit} />;
    default:
      return null;
  }
};

export default OptionView;
