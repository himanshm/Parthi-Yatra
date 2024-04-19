import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Input from '../components/UI/Input';
import CreateNewForm from '../components/admin/CreateNewForm';
import { useState } from 'react';
import Modal from '../components/UI/Modal';

interface AFormInputs {
  fullName: string;
  email: string;
}

interface AdminResponse {
  id: string;
  username: string;
  temporaryPassword: string;
}

function CreateAdmin() {
  const { control, handleSubmit, reset } = useForm<AFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  const [resMessage, setResMessage] = useState('');
  const [adminCredentials, setAdminCredentials] =
    useState<AdminResponse | null>(null);
  const [openModel, setOpenModel] = useState(false);

  const handleShowModal = () => setOpenModel(true);
  const handleCloseModal = () => setOpenModel(false);

  const onSubmit: SubmitHandler<AFormInputs> = async (data) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${apiUrl}/admin/signup`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setAdminCredentials(result.admin); // Store the admin details
        setResMessage(result.message);
        handleShowModal();
        reset();
      } else {
        throw new Error(result.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }

    reset();
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
    </>
  );
  return (
    <>
      <CreateNewForm
        inputs={userInputs}
        entity='admin'
        onSubmit={handleSubmit(onSubmit)}
      ></CreateNewForm>

      {openModel && adminCredentials && (
        <Modal isOpen={openModel} onClose={handleCloseModal}>
          <p>{resMessage}</p>
          <p>Please note down the following details:</p>
          <p>Username: {adminCredentials.username}</p>
          <p>Temporary Password: {adminCredentials.temporaryPassword}</p>
        </Modal>
      )}
    </>
  );
}

export default CreateAdmin;
