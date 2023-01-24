import { Question, questionInit } from '../../types/question';
import { Title, titleInit } from '../../types/title';

interface FormsStateType {
  title: Title;
  questions: Question[];
}

const formsState: FormsStateType = {
  title: titleInit,
  questions: [questionInit],
};
export default formsState;
