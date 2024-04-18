import { ReactNode } from 'react';
import Button from './Button';
import Input from './Input';

type LoginProps = {
  actions: ReactNode;
};

function Login({ actions }: LoginProps) {
  return (
    <div className='w-full max-w-sm p-4 border rounded-lg shadow'>
      <form className='space-y-6'>
        <h5 className='text-xl font-medium text-[#D9B471] text-center'>
          Sign in
        </h5>
        <Input type='text' id='username' label='Username' required />
        <Input type='password' id='password' label='Password' required />

        <div className='flex items-end'>{actions}</div>

        <Button type='submit' btntype='primary' className='w-full'>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
