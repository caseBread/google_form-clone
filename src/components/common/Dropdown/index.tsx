import { RiArrowDropDownFill } from 'react-icons/ri';
import React, { useCallback, useRef } from 'react';
import UseOutsideClick from '../../../hooks/UseOutsideClick';
import { IDropdownInit } from '../../../types/dropdown';

interface Props {
  value: IDropdownInit;
  handleValue: (e: React.MouseEvent<HTMLDivElement>) => void;
  DropdownInit: IDropdownInit[];
}

const Dropdown = ({ value, handleValue, DropdownInit }: Props) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = UseOutsideClick(dropdownRef, false);

  const handleShowDropdown = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, [setShowDropdown]);

  return (
    <div className="w-1/3 p-3 border-gray-300 border-1 rounded-sm" onClick={handleShowDropdown} ref={dropdownRef}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-2">{value.content}</div>
        <RiArrowDropDownFill />
      </div>
      <div className={`${!showDropdown && 'hidden'}`}>
        <div className="fixed shadow-md border-1 rounded-md bg-white leading-8 max-w-[14rem] w-full [&>*]:pl-4 [&>*]:py-2 hover:[&>*]:bg-gray-200 z-50">
          {DropdownInit.map((option, idx) => (
            <div key={option.id} data-id={option.id} className="flex items-center gap-2" onClick={handleValue}>
              {option.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
