import { useState } from 'react';
import BoxContainer from '../common/BoxContainer';
import QuestionBottom from './Conatiner/BottomContainer';
import QuestionMiddle from './Conatiner/MiddleContainer';
import QuestionTop from './Conatiner/TopContainer';

const Question = () => {
  const [questionType, setQuestionType] = useState('객관식 질문');
  return (
    <BoxContainer>
      <QuestionTop questionType={questionType} setQuestionType={setQuestionType} />
      <QuestionMiddle questionType={questionType} />
      <QuestionBottom />
    </BoxContainer>
  );
};
export default Question;
