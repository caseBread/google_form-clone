import { useState } from 'react';

interface OptionType {
  id: number;
}

interface UseOptionListProps {
  (): [OptionType[], () => void, (id: number) => void];
}

const useOptionList: UseOptionListProps = () => {
  const [list, setList] = useState<OptionType[]>([]);

  const addOption = () => {
    const newOption: OptionType = { id: list.length + 1 };
    setList((prev) => [...prev, newOption]);
  };

  const removeOption = (id: number) => {
    setList((prev) => prev.filter((option, idx) => option.id !== id));
  };

  return [list, addOption, removeOption];
};
export default useOptionList;
