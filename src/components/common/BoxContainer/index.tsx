interface BoxContainerProps {
  children: React.ReactNode;
  handleForm?: (e: React.ChangeEvent<HTMLFormElement>) => void;
  type?: 'title' | 'question';
  questionId?: number;
}

const BoxContainer = ({ children, handleForm, type }: BoxContainerProps) => {
  return (
    <form
      className={`bg-white rounded-lg flex-center flex-col p-6  focus-box my-4 ${
        type === 'title' && 'border-t-8 border-t-primary'
      }`}
      onChange={handleForm}
    >
      {children}
    </form>
  );
};
export default BoxContainer;
