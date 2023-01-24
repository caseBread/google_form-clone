import Question from '../components/Question';
import SideBar from '../components/SideBar';
import Title from '../components/Title';
import useList from '../hooks/useList';

const Main = () => {
  const [questionList, addQuestion, removeQuestion] = useList();

  return (
    <>
      <main className="transform-center-x w-full max-w-4xl">
        <Title />
        {questionList.map((question, idx) => (
          <Question key={question.id} id={question.id} removeQuestion={removeQuestion} />
        ))}
      </main>
      <SideBar addQuestion={addQuestion} />
    </>
  );
};

export default Main;
