interface Props {
  optionType: string;
}

const ObjectiveOption = ({ optionType }: Props) => {
  return <div>{optionType}</div>;
};
export default ObjectiveOption;
