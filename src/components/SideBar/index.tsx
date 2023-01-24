import { useCallback } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';
import { addQuestion } from '../../redux/forms/slice';
import { useAppDispatch } from '../../redux/hooks';

const SideBar = ({ addQuestion: addQuestionView }: { addQuestion: () => void }) => {
  const dispatch = useAppDispatch();

  const handleAddQuestion = useCallback(() => {
    addQuestionView();
    dispatch(addQuestion());
  }, [addQuestionView, dispatch]);

  return (
    <aside className="fixed sidebar-location w-fit float-right bottom-1/2 max-lg:bottom-0 max-lg:flex-col max-lg:w-screen max-lg:left-0 max-lg:right-0">
      <div className="bg-white rounded-lg border-gray-200 flex flex-col [&>*]:p-4 max-lg:flex-row justify-around">
        <button type="button" onClick={handleAddQuestion}>
          <BsPlusCircle size={25} />
        </button>
        <button type="button">
          <IoEyeOutline size={25} />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
