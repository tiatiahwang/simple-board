import styled from 'styled-components';
import { BaseBox } from '../shared';

const Container = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormContainer;
