import BoxContainer from '../components/common/BoxContainer';
import { selectQuestions, selectTitle } from '../redux/forms/slice';
import { useAppSelector } from '../redux/hooks';

const Preview = () => {
  const titleSelector = useAppSelector(selectTitle);
  const questionSelector = useAppSelector(selectQuestions);
  return (
    <main className="transform-center-x w-full max-w-4xl">
      <BoxContainer type="title">{JSON.stringify(titleSelector)}</BoxContainer>
      {questionSelector &&
        questionSelector.map((question, idx) => (
          <BoxContainer type="question">{JSON.stringify(question)}</BoxContainer>
        ))}
    </main>
  );
};

export default Preview;
