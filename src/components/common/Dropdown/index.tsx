interface Props {
  children: React.ReactNode;
}

const Dropdown = ({ children }: Props) => {
  return (
    <div>
      <div className="fixed shadow-md border-1 rounded-md bg-white leading-8 max-w-[14rem] w-full [&>*]:pl-4 [&>*]:py-2 hover:[&>*]:bg-gray-200 z-50">
        {children}
      </div>
    </div>
  );
};
export default Dropdown;
