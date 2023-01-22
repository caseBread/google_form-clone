import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = (
  el: React.RefObject<HTMLDivElement>,
  initialState?: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];

const UseOutsideClick: Props = (element, initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive((prev) => !prev);
      }
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => window.removeEventListener('click', pageClickEvent);
  }, [element, isActive, setIsActive]);

  return [isActive, setIsActive];
};

export default UseOutsideClick;
