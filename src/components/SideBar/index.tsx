import { BsPlusCircle } from 'react-icons/bs';
import { IoEyeOutline } from 'react-icons/io5';

const SideBar = ({ addQuestion }: { addQuestion: () => void }) => {
  return (
    <aside className="fixed w-fit float-right right-48 bottom-1/2">
      <div className="bg-white rounded-lg border-gray-200 flex flex-col [&>*]:p-4">
        <button onClick={addQuestion}>
          <BsPlusCircle size={25} />
        </button>
        <button>
          <IoEyeOutline size={25} />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
