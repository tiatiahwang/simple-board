import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Board from './Pages/Board';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<LogIn />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
