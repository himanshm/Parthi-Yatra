import { ReactNode, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Button from './Button';
import Input from './Input';
import { useAuth } from '../../context/useAuth';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  username: string;
  password: string;
}

type LoginProps = {
  actions?: ReactNode;
};

function Login({ actions }: LoginProps) {
  const { login, isFirstLogin, message, user } = useAuth();
  const navigate = useNavigate();
  const { control, reset, handleSubmit } = useForm<LoginFormInputs>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [openModel, setOpenModel] = useState(false);

  const handleShowModal = () => setOpenModel(true);
  const handleCloseModal = () => setOpenModel(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await login(data.username, data.password);

    if (isFirstLogin) {
      handleShowModal();
    } else {
      switch (user?.role) {
        case 'user':
          navigate('/user-info');
          break;
        case 'admin':
          navigate('/admin/create-new');
          break;
        default:
          break;
      }
    }

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

      {openModel && (
        <Modal isOpen={openModel} onClose={handleCloseModal}>
          <p>{message}</p>
        </Modal>
      )}
    </div>
  );
}

export default Login;
