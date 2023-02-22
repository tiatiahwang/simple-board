import styled from 'styled-components';

const Button = styled.input`
  width: 100%;
  margin-top: 12px;
  padding: 8px 0;
  background-color: #ffc1cc;
  color: #fff;
  border: none;
  border-radius: 3px;
  text-align: center;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
`;

export default Button;
