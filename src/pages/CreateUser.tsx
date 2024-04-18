import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import CreateNewForm from '../components/admin/CreateNewForm';
import Input from '../components/UI/Input';

interface UFormInputs {
  fullName: string;
  email: string;
  phone: string;
  district: string;
}

function CreateUser() {
  const { control, handleSubmit, reset } = useForm<UFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      district: '',
    },
  });

  const onSubmit: SubmitHandler<UFormInputs> = (data) => {
    console.log(data);

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
      <Controller
        name='phone'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input {...field} type='text' label='Mobile No.' id='phone' />
        )}
      />
      <Controller
        name='district'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input {...field} type='text' label='District' id='district' />
        )}
      />
    </>
  );
  return (
    <CreateNewForm
      inputs={userInputs}
      entity='user'
      onSubmit={handleSubmit(onSubmit)}
    ></CreateNewForm>
  );
}

export default CreateUser;
