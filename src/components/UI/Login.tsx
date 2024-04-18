import { ReactNode } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Button from './Button';
import Input from './Input';

interface LoginFormInputs {
  username: string;
  password: string;
}

type LoginProps = {
  actions?: ReactNode;
};

function Login({ actions }: LoginProps) {
  const { control, reset, handleSubmit } = useForm<LoginFormInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className='w-full max-w-sm p-4 border rounded-lg shadow'>
      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <h5 className='text-xl font-medium text-[#D9B471] text-center'>
          Sign in
        </h5>
        <Controller
          name='username'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field} type='text' id='username' label='Username' />
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field} type='text' id='password' label='Password' />
          )}
        />

        <div className='flex items-end'>{actions}</div>

        <Button type='submit' btntype='primary'>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
