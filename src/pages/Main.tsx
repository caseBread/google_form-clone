import Question from '../components/Question';
import SideBar from '../components/SideBar';
import Title from '../components/Title';

const Main = () => {
  return (
    <>
      <div className="transform-center-x w-full max-w-4xl">
        <Title />
        <Question />
      </div>
    </>
  );
};

export default Main;
