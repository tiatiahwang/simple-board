import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Board from './Pages/Board';
import Home from './Pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
