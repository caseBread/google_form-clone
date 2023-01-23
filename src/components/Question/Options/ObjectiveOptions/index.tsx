import useList from '../../../../hooks/useList';
import ObjectiveOption from './ObjectiveOption';

interface Props {
  optionType: string;
}

const ObjectiveOptions = ({ optionType }: Props) => {
  const [optionList, addOption, removeOption] = useList();

  return (
    <div className="w-full">
      {optionList.map((option, idx) => (
        <ObjectiveOption
          key={option.id}
          id={option.id}
          dropdownIndex={idx + 1}
          optionType={optionType}
          removeOption={removeOption}
        />
      ))}
      <button className="text-gray-400" onClick={addOption}>
        옵션 추가
      </button>
    </div>
  );
};
export default ObjectiveOptions;
