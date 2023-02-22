import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useForm } from 'react-hook-form';

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <label htmlFor='email'>이메일</label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='이메일을 입력해주세요'
        aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
        {...register('email', {
          required: '이메일은 필수 입력 사항입니다',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다',
          },
        })}
      />
      {errors.email && <small role='alert'>{errors.email.message}</small>}
      <label htmlFor='password'>비밀번호</label>
      <input
        id='password'
        type='password'
        name='password'
        placeholder='비밀번호를 입력해주세요'
        aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
        {...register('password', {
          required: '비밀번호는 필수 입력 사항입니다',
          minLength: {
            value: 8,
            message: '8자리 이상 비밀번호가 필요합니다',
          },
        })}
      />
      {errors.password && <small role='alert'>{errors.password.message}</small>}
      <button type='submit' disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default LogInForm;
