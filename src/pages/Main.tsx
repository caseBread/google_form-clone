import styled from 'styled-components';
import Question from '../components/Question';
import SideBar from '../components/SideBar';
import Title from '../components/Title';
import { transformCenterX } from '../styles/common';

const MainContainer = styled.div`
  ${transformCenterX}
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <Title />
        <Question />
      </MainContainer>
    </>
  );
};

export default Main;
