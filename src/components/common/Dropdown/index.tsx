import { RiArrowDropDownFill } from 'react-icons/ri';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import UseOutsideClick from '../../../hooks/UseOutsideClick';

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  DropdownInit: React.ReactNode[];
}

const Dropdown = ({ value, setValue, DropdownInit }: Props) => {
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = UseOutsideClick(dropdownRef, false);
  const handleValue = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setValue(e.currentTarget.innerHTML);
    },
    [setValue]
  );

  const handleShowDropdown = useCallback(() => {
    setShowDropdown((prev) => !prev);
  }, [setShowDropdown]);

  return (
    <div className="w-1/3 p-3 border-gray-300 border-1 rounded-sm" onClick={handleShowDropdown} ref={dropdownRef}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-2" dangerouslySetInnerHTML={{ __html: value }}></div>
        <RiArrowDropDownFill />
      </div>
      <div className={`${!showDropdown && 'hidden'}`}>
        <div className="fixed shadow-md border-1 rounded-md bg-white leading-8 max-w-[14rem] w-full [&>*]:pl-4 [&>*]:py-2 hover:[&>*]:bg-gray-200 z-50">
          {DropdownInit.map((option, idx) => (
            <div className="flex items-center gap-2" onClick={handleValue}>
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
