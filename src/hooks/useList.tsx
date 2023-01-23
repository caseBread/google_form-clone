import { useState } from 'react';

interface ListT<T> {
  id: number;
  value?: T;
}

const useList = <T,>(): [ListT<T>[], (value?: T) => void, (id: number) => void] => {
  const [list, setList] = useState<ListT<T>[]>([]);

  const addElement = (value?: T) => {
    const newOption: ListT<T> = value === undefined ? { id: list.length + 1 } : { id: list.length + 1, value };
    setList((prev) => [...prev, newOption]);
  };

  const removeElement = (id: number) => {
    setList((prev) => prev.filter((option, idx) => option.id !== id));
  };

  return [list, addElement, removeElement];
};
export default useList;
