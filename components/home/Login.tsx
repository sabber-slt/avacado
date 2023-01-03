import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginMutation } from '../../hooks/useMutation';
import useAuth from '../../store/useAuth';
import Container from '../main/Container';

type FormData = {
  phone: string;
};

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');
  const { setUser, user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onClick = async (data: FormData) => {
    setLoading(true);
    const res = await loginMutation(data.phone);
    console.log(res);
    if (res.length === 0) {
      setMessage('کاربری با این شماره تماس یافت نشد');
    } else {
      setUser(res[0]);
      window.location.reload();
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <Container>
        <div className="w-full h-full flex flex-col items-center justify-center pb-32">
          <p className="text-rose-400 text-xl z-40">{message}</p>
          <form
            onSubmit={handleSubmit(onClick)}
            className="w-72 py-5 flex flex-col items-center rounded-lg"
          >
            <label className="text-green-700 text-lg pb-3">شماره تماس: </label>
            <input
              style={{ direction: 'ltr' }}
              type="number"
              {...register('phone', { required: true })}
              className="w-64 h-10 text-xl pl-3 outline-none border-none bg-zinc-200 rounded-md text-zinc-600"
            />
            <button
              type="submit"
              className="w-40 bg-green-700 text-zinc-100 h-12 text-lg mt-5 rounded-md hover:scale-105 "
            >
              {loading ? '...' : 'ورود'}
            </button>
          </form>
          <div className="w-full flex justify-center">
            <button
              onClick={() => router.push('/register')}
              className="text-zinc-500 underline"
            >
              عضو نیستید؟ ثبت نام کنید
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
