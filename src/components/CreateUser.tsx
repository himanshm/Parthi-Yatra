import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import CreateNewForm from './admin/CreateNewForm';
import Input from './UI/Input';
import { useAuth } from '../context/useAuth';
import Modal from './UI/Modal';

interface UFormInputs {
  fullName: string;
  email: string;
  role: 'user' | 'admin';
}

function CreateUser() {
  const { signup, user, message } = useAuth();
  const { control, handleSubmit, reset } = useForm<UFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      role: 'user',
    },
  });
  const [openModel, setOpenModel] = useState(false);

  const handleShowModal = () => setOpenModel(true);
  const handleCloseModal = () => setOpenModel(false);

  const onSubmit: SubmitHandler<UFormInputs> = (data) => {
    try {
      signup(data.fullName, data.email, data.role);
      handleShowModal();
      reset();
    } catch (err) {
      console.error('Signup error:', err);
    }
  };

  const userInputs = (
    <>
      <Controller
        name='fullName'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input {...field} type='text' label='Full Name' id='full-name' />
        )}
      />
      <Controller
        name='email'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input {...field} type='email' label='E-mail' id='email' />
        )}
      />
      <Controller
        name='role'
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            type='text'
            label='Role'
            id='role'
            value={value}
            onBlur={onBlur}
            ref={ref}
            onChange={(e) => onChange(e.target.value.toLowerCase())}
          />
        )}
      />
    </>
  );
  return (
    <>
      <CreateNewForm
        inputs={userInputs}
        entity='user'
        onSubmit={handleSubmit(onSubmit)}
      />

      {openModel && user && (
        <Modal isOpen={openModel} onClose={handleCloseModal}>
          <p className='text-xl font-medium p-2 text-[#049DD9]'>{message}</p>
          <p className='text-l font-medium p-2'>
            Please note down the following details:
          </p>
          <p className='text-l font-normal py-1 px-2 text-yellow-800'>
            Username: {user.username}
          </p>
          <p className='text-l font-normal py-1 px-2 text-yellow-800'>
            Temporary Password: {user.temporaryPassword}
          </p>
        </Modal>
      )}
    </>
  );
}

export default CreateUser;
