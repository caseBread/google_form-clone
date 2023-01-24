import { useState } from 'react';
import FormContainer from '../common/FormContainer';
import QuestionBottom from './Conatiner/BottomContainer';
import QuestionMiddle from './Conatiner/MiddleContainer';
import QuestionTop from './Conatiner/TopContainer';

const Question = ({ id, removeQuestion }: { id: number; removeQuestion: (id: number) => void }) => {
  const [questionType, setQuestionType] = useState('객관식 질문');
  return (
    <FormContainer questionId={id}>
      <QuestionTop questionType={questionType} setQuestionType={setQuestionType} />
      <QuestionMiddle optionType={questionType} />
      <QuestionBottom id={id} removeQuestion={removeQuestion} />
    </FormContainer>
  );
};
export default Question;
