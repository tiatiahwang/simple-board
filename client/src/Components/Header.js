import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  margin-right: 10px;
`;

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to='/'>홈으로</StyledLink>
      <StyledLink to='/board'>게시판</StyledLink>
      <StyledLink to='/signin'>로그인</StyledLink>
    </Wrapper>
  );
};

export default Header;
