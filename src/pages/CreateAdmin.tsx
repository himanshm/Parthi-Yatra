import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Input from '../components/UI/Input';
import CreateNewForm from '../components/admin/CreateNewForm';

interface AFormInputs {
  fullName: string;
  email: string;
}

function CreateAdmin() {
  const { control, handleSubmit, reset } = useForm<AFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<AFormInputs> = (data) => {
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
    </>
  );
  return (
    <CreateNewForm
      inputs={userInputs}
      entity='admin'
      onSubmit={handleSubmit(onSubmit)}
    ></CreateNewForm>
  );
}

export default CreateAdmin;
