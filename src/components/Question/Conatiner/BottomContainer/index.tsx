import { MdOutlineContentCopy } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useCallback } from 'react';
import { deleteQuestion } from '../../../../redux/forms/slice';
import { useDispatch } from 'react-redux';

const QuestionBottom = ({
  id,
  removeQuestion: removeQuestionView,
}: {
  id: number;
  removeQuestion: (id: number) => void;
}) => {
  const dispatch = useDispatch();
  const handleRemoveQuestion = useCallback(() => {
    removeQuestionView(id);
    dispatch(deleteQuestion(id));
  }, [dispatch, id, removeQuestionView]);

  return (
    <div className="pt-4 w-full border-t-1">
      <div className="flex justify-end [&>*]:px-2">
        <button className="button-shadow" type="button">
          <MdOutlineContentCopy size={20} />
        </button>
        <button className="button-shadow" type="button" onClick={handleRemoveQuestion}>
          <IoTrashOutline size={20} />
        </button>
        <div>
          <div className="border-l-2 h-full"></div>
        </div>
        <div className="flex items-center gap-2">
          필수
          <label className="switch">
            <input type="checkbox" name="essential" />
            <span className="slider"></span>
          </label>
        </div>
        <button className="button-shadow" type="button">
          <BiDotsVerticalRounded size={20} />
        </button>
      </div>
    </div>
  );
};
export default QuestionBottom;
