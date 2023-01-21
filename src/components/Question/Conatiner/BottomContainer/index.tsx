import { MdOutlineContentCopy } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const QuestionBottom = () => {
  return (
    <div className="pt-4 w-full border-t-1">
      <div className="flex justify-end [&>*]:px-2">
        <button className="hover:bg-gray-100 rounded-full">
          <MdOutlineContentCopy size={20} />
        </button>
        <button className="hover:bg-gray-100 rounded-full">
          <IoTrashOutline size={20} />
        </button>
        <div>
          <div className="border-l-2 h-full"></div>
        </div>
        <div>
          <span className="mr-2">필수</span>
          <input id="essential" type="checkbox" />
        </div>
        <button className="hover:bg-gray-100 rounded-full">
          <BiDotsVerticalRounded size={20} />
        </button>
      </div>
    </div>
  );
};
export default QuestionBottom;
