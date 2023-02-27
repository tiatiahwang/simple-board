import { Link } from 'react-router-dom';

const BoardList = () => {
  return (
    <div>
      게시판<Link to='/board/new'>글쓰기</Link>
    </div>
  );
};

export default BoardList;
