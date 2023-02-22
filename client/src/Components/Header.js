import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to='/'>홈으로</Link>
      <Link to='/board'>게시판</Link>
      <Link to='/signin'>로그인</Link>
    </>
  );
};

export default Header;
