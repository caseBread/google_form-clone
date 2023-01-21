interface Props {
  questionType: string;
}

const QuestionMiddle = ({ questionType }: Props) => {
  return <div>{questionType}</div>;
};
export default QuestionMiddle;
