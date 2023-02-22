import styled from 'styled-components';

const SSeperator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0 10px;
    font-size: 12px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

const Seperator = () => {
  return (
    <SSeperator>
      <div></div>
      <span>or</span>
      <div></div>
    </SSeperator>
  );
};

export default Seperator;
