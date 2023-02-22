import { Link } from 'react-router-dom';
import LogInForm from '../Components/LogInForm';

const LogIn = () => {
  return (
    <>
      <LogInForm />
      <Link to='/signup'>회원가입</Link>
    </>
  );
};

export default LogIn;
