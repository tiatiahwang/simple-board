import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Components/auth/AuthLayout';
import Button from '../Components/auth/Button';
import FormContainer from '../Components/auth/FormContainer';
import FormError from '../Components/auth/FormError';
import Input from '../Components/auth/Input';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <FormContainer>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
          <Button type='submit' value={'가입'} />
          <FormError message={errors?.result?.message} />
        </form>
      </FormContainer>
    </AuthLayout>
  );
};

export default SignUp;
