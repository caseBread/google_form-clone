import React from 'react';
import FormContainer from '../common/FormContainer';

const Title = () => {
  return (
    <FormContainer type="title">
      <input
        type="text"
        className="border-b-gray-300 border-b-[1px] text-2xl w-full py-2 my-1 focus-input"
        defaultValue="제목 없는 설문지"
        name="title"
      />
      <input
        type="text"
        className="border-b-1 border-b-gray-300 w-full my-1 focus-input"
        placeholder="설문지 설명"
        name="explanation"
      />
    </FormContainer>
  );
};

export default Title;
