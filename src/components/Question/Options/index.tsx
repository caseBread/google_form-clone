import ObjectiveOptions from './ObjectiveOptions';
import SubjectiveOption from './SubjectiveOption';

interface Props {
  optionType: string;
}

const Options = ({ optionType }: Props) => {
  switch (optionType) {
    case '객관식 질문':
    case '체크박스':
    case '드롭다운':
      return <ObjectiveOptions optionType={optionType} />;
    case '단답형':
    case '장문형':
      return <SubjectiveOption optionType={optionType} />;
    default:
      throw new Error('없는 선택지 유형입니다.');
  }
};

export default Options;
