import BoxContainer from '../components/common/BoxContainer';
import { selectQuestions, selectTitle } from '../redux/forms/slice';
import { useAppSelector } from '../redux/hooks';

const Preview = () => {
  const titleSelector = useAppSelector(selectTitle);
  const questionSelector = useAppSelector(selectQuestions);
  return (
    <main className="transform-center-x w-full max-w-4xl">
      <BoxContainer type="title">
        <div className="text-2xl w-full py-2 my-1">{titleSelector.title}</div>
        <div className="w-full my-1">{titleSelector.explanation}</div>
      </BoxContainer>
      {questionSelector &&
        questionSelector.map((question, idx) => (
          <BoxContainer type="question">{JSON.stringify(question)}</BoxContainer>
        ))}
    </main>
  );
};

export default Preview;
