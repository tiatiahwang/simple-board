import styled from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-top: 5px;
  padding: 7px;
  background-color: #fafafa;
  border-radius: 3px;
  border: 0.5px solid
    ${(props) => (props.hasError ? 'tomato' : 'rgb(219, 219, 219)')};
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(38, 38, 38);
  }
`;

export default Input;
