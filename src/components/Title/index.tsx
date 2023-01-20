const Title = () => {
  return (
    <div className="bg-white rounded-lg border-t-8 border-t-primary flex-center flex-col p-6 focus-box">
      <input
        type="text"
        className="border-b-gray-300 border-b-[1px] text-2xl w-full py-2 my-1 focus-input"
        defaultValue="제목 없는 설문지"
      />
      <input type="text" className="border-b-1 border-b-gray-300 w-full my-1 focus-input" placeholder="설문지 설명" />
    </div>
  );
};

export default Title;
