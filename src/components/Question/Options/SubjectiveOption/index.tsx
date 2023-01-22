interface Props {
  optionType: string;
}

const SubjectiveOption = ({ optionType }: Props) => {
  return <div>{optionType}</div>;
};
export default SubjectiveOption;
