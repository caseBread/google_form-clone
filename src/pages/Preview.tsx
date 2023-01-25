import BoxContainer from '../components/common/BoxContainer';
import OptionView from '../components/preview/OptionView';
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
          <BoxContainer key={question.id} type="question">
            <div className="w-full p-4 text-xl">{question.question}</div>
            <div className="w-full">
              <OptionView type={question.type} options={question.options} />
            </div>
          </BoxContainer>
        ))}
    </main>
  );
};

export default Preview;
