interface Props {
  optionType: string;
}

const SubjectiveOption = ({ optionType }: Props) => {
  return <div className="w-2/3 border-gray-300 border-b-2 border-dotted pb-1 text-gray-400">{optionType} 텍스트</div>;
};
export default SubjectiveOption;
