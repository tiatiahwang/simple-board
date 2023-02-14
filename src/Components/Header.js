import { Link } from 'react-router-dom';

const Header = () => {
  //   const navigate = useNavigate();
  return (
    <>
      <Link to='/'>홈으로</Link>
      <Link to='/board'>게시판</Link>
    </>
  );
};

export default Header;
