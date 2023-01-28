import { useState } from 'react';
import FormContainer from '../common/FormContainer';
import QuestionBottom from './Conatiner/BottomContainer';
import QuestionMiddle from './Conatiner/MiddleContainer';
import QuestionTop from './Conatiner/TopContainer';

interface Props {
  id: number;
  removeQuestion: (id: number) => void;
}

const Question = ({ id, removeQuestion }: Props) => {
  const [questionType, setQuestionType] = useState('단답형');
  return (
    <FormContainer questionId={id}>
      <QuestionTop questionType={questionType} setQuestionType={setQuestionType} />
      <QuestionMiddle optionType={questionType} />
      <QuestionBottom id={id} removeQuestion={removeQuestion} />
    </FormContainer>
  );
};
export default Question;
