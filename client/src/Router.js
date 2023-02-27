import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import BoardList from './Pages/board/BoardList';
import NewBoard from './Pages/board/NewBoard';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/board' element={<BoardList />} />
        <Route path='/board/new' element={<NewBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
