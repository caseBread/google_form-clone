interface Props {
  children: React.ReactNode;
  type?: 'title' | 'question';
}

const BoxContainer = ({ children, type = 'question' }: Props) => {
  return (
    <div
      className={`bg-white rounded-lg flex-center flex-col p-6  focus-box my-4 ${
        type === 'title' && 'border-t-8 border-t-primary'
      }`}
    >
      {children}
    </div>
  );
};

export default BoxContainer;
