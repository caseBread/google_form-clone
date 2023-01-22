import { useState } from 'react';

import ObjectiveOption from './ObjectiveOption';

interface Props {
  optionType: string;
}

const ObjectiveOptions = ({ optionType }: Props) => {
  const [list, setList] = useState<number[]>([]);

  const onClick = () => {
    setList((prev) => [...prev, list.length + 1]);
  };

  return (
    <div className="w-full">
      {list.map((x, idx) => (
        <ObjectiveOption key={x} id={x} optionType={optionType} />
      ))}
      <button className="text-gray-400" onClick={onClick}>
        옵션 추가
      </button>
    </div>
  );
};
export default ObjectiveOptions;
