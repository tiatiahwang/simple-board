import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Components/auth/AuthLayout';
import Button from '../Components/auth/Button';
import FormContainer from '../Components/auth/FormContainer';
import FormError from '../Components/auth/FormError';
import Input from '../Components/auth/Input';

const SignUp = () => {
  const navigate = useNavigate();
  const [errorFromServer, setErrorFromServer] = useState();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    setErrorFromServer('');
    const { email, nickname, password } = data;
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      process.env.REACT_APP_SECRET_KEY,
    ).toString();
    try {
      const signUpRequest = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          email,
          nickname,
          password: encrypted,
        },
      );
      if (signUpRequest.status === 200) {
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        setErrorFromServer(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <AuthLayout>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email', {
              required: '이메일은 필수 입력 사항입니다',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞게 입력해주세요',
              },
            })}
            name='email'
            type='text'
            placeholder='이메일'
            hasError={Boolean(errors?.email?.message)}
          />
          <FormError message={errors?.email?.message} />
          <Input
            {...register('nickname', {
              required: '필수 입력 사항입니다',
              minLength: {
                value: 2,
                message: '2자리 이상 입력해 주세요',
              },
            })}
            name='nickname'
            type='text'
            placeholder='이름'
          />
          <FormError message={errors?.nickname?.message} />
          <Input
            {...register('password', {
              required: '필수 입력 사항입니다',
              minLength: {
                value: 8,
                message: '8자리 이상 비밀번호가 필요합니다',
              },
            })}
            name='password'
            type='password'
            placeholder='비밀번호'
          />
          <FormError message={errors?.password?.message} />
          <Input
            {...register('passwordCheck', {
              required: '비밀번호를 확인해 주세요',
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다';
                },
              },
            })}
            name='passwordCheck'
            type='password'
            placeholder='비밀번호 확인'
          />
          <FormError message={errors?.passwordCheck?.message} />
          <Button
            type='submit'
            value={isSubmitting ? '로딩중' : '로그인'}
            disabled={isSubmitting}
          />
          {errorFromServer && <FormError message={errorFromServer} />}
        </form>
      </FormContainer>
    </AuthLayout>
  );
};

export default SignUp;
