import React, { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import useIcon from '../../../../../hooks/useIcon';

interface Props {
  optionType: string;
  id: number;
  removeOption: (id: number) => void;
}

const ObjectiveOption = ({ optionType, id, removeOption }: Props) => {
  const icon = useIcon({ optionType, id });
  const handleRemoveButton = useCallback(() => removeOption(id), [id, removeOption]);

  return (
    <div className="flex gap-4 items-center">
      <div className="w-6">{icon}</div>
      <input
        className="focus-input w-full p-2 border-b-1 border-white hover:border-gray-200"
        type="text"
        defaultValue="옵션"
      />
      <button className="button-shadow" onClick={handleRemoveButton}>
        <FiX />
      </button>
    </div>
  );
};
export default ObjectiveOption;
