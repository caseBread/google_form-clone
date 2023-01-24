import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Preview from '../pages/Preview';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
