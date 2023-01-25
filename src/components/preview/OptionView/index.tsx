import React, { useCallback, useState } from 'react';
import { Option } from '../../../types/question';
import Dropdown from '../../common/Dropdown';

const OptionView = ({ type, options }: { type: string; options: Option[] }) => {
  const [dropdownValue, setDropdownValue] = useState('');

  switch (type) {
    case '객관식 질문':
    case '체크박스':
    case '드롭다운':
      const DropdownInit = options.map((option, idx) => option.content);
      return <Dropdown value={dropdownValue} setValue={setDropdownValue} DropdownInit={DropdownInit} />;
    default:
      return null;
  }
};

export default OptionView;
