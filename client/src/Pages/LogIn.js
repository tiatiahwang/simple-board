import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../Components/auth/AuthLayout';
import FormContainer from '../Components/auth/FormContainer';
import Input from '../Components/auth/Input';
import FormError from '../Components/auth/FormError';
import Button from '../Components/auth/Button';
import Seperator from '../Components/auth/Seperator';
import { FatLink } from '../Components/shared';

const LogIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      process.env.REACT_APP_SECRET_KEY,
    ).toString();
    try {
      const logInRequest = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          email,
          password: encrypted,
        },
      );
      if (logInRequest.status === 200) {
        navigate('/');
      }
    } catch (error) {
      if (error.response.data) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <AuthLayout>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            name='email'
            placeholder='이메일을 입력해주세요'
            aria-invalid={
              !isDirty ? undefined : errors.email ? 'true' : 'false'
            }
            {...register('email', {
              required: '이메일은 필수 입력 사항입니다',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞게 입력해주세요',
              },
            })}
          />
          <FormError message={errors?.email?.message} />
          <Input
            type='password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            aria-invalid={
              !isDirty ? undefined : errors.password ? 'true' : 'false'
            }
            {...register('password', {
              required: '비밀번호는 필수 입력 사항입니다',
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호가 필요합니다',
              },
            })}
          />
          <FormError message={errors?.password?.message} />
          <Button
            type='submit'
            value={isSubmitting ? '로딩중' : '로그인'}
            disabled={isSubmitting}
          />
          <FormError message={errors?.result?.message} />
        </form>
        <Seperator />
        <FatLink>
          <Link to='/signup'>회원가입</Link>
        </FatLink>
      </FormContainer>
    </AuthLayout>
  );
};

export default LogIn;
