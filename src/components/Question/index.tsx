import BoxContainer from '../common/BoxContainer';

const Question = () => {
  return (
    <BoxContainer>
      <div className="flex w-full gap-8">
        <input className="w-2/3 focus-input p-4 bg-gray-50 border-b-1" type="text" defaultValue="제목없는 질문" />
        <div className="w-1/3">드롭박스</div>
      </div>
      <div>middle</div>
      <div>bottom</div>
    </BoxContainer>
  );
};
export default Question;
