import React from 'react';
import { updateQuestion, updateTitle } from '../../../redux/forms/slice';
import { useAppDispatch } from '../../../redux/hooks';
import BoxContainer from '../BoxContainer';

interface Props {
  children: React.ReactNode;
  type?: 'title' | 'question';
  questionId?: number;
}

const FormContainer = ({ children, type = 'question', questionId }: Props) => {
  const dispatch = useAppDispatch();

  // TODO : redux 로직 분리하기
  const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = Array.from(e.currentTarget);
    e.preventDefault();
    if (type === 'title') {
      const obj = target.reduce(
        (acc, cur) => {
          if (cur instanceof HTMLInputElement) {
            switch (cur.name) {
              case 'title':
                acc.title = cur.value;
                break;
              case 'explanation':
                acc.explanation = cur.value;
                break;
              default:
                throw new Error(`정의되지 않은 유형의 입력입니다. : ${cur.name}`);
            }
          }
          return acc;
        },
        {
          title: '',
          explanation: '',
        }
      );
      dispatch(updateTitle(obj));
    } else if (type === 'question' && questionId !== undefined) {
      const obj = target.reduce(
        (acc, cur) => {
          if (cur instanceof HTMLInputElement) {
            switch (cur.name) {
              case 'question':
                acc.question = cur.value;
                break;
              case 'option':
                acc.options.push({ id: Number(cur.dataset.id), content: cur.value });
                break;
              case 'questionType':
                acc.type = cur.value;
                break;
              case 'essential':
                acc.essential = cur.value === 'true';
                break;
              default:
                throw new Error(`정의되지 않은 유형의 입력입니다. : ${cur.name}`);
            }
          }
          return acc;
        },
        {
          id: 0,
          question: '',
          type: '',
          essential: false,
          options: [{ id: 0, content: '' }],
        }
      );
      dispatch(updateQuestion({ ...obj, id: questionId }));
    } else if (type === 'question' && questionId === undefined) {
      throw new Error('QuestionId를 Props로 주입해주세요.');
    } else {
      throw new Error(`정의되지 않은 유형의 Box입니다. : ${type}`);
    }
  };

  return (
    <BoxContainer handleForm={handleForm} type={type} questionId={questionId}>
      {children}
    </BoxContainer>
  );
};

export default FormContainer;
