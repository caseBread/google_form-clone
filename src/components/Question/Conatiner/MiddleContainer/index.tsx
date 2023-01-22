import Options from '../../Options';

interface Props {
  optionType: string;
}

const QuestionMiddle = ({ optionType }: Props) => {
  return (
    <div className="my-4">
      <Options optionType={optionType} />
    </div>
  );
};
export default QuestionMiddle;
