import { Option } from '../../../types/question';
import Dropdown from '../../common/Dropdown';

const OptionView = ({ type, options }: { type: string; options: Option[] }) => {
  switch (type) {
    case '객관식 질문':
    case '체크박스':
    case '드롭다운':
      return (
        <Dropdown>
          {options.map((option, idx) => (
            <div key={option.id}>{option.content}</div>
          ))}
        </Dropdown>
      );
    default:
      return null;
  }
};

export default OptionView;
