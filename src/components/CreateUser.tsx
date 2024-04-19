import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import CreateNewForm from './admin/CreateNewForm';
import Input from './UI/Input';

interface UFormInputs {
  fullName: string;
  email: string;
  role: 'user' | 'admin';
}

function CreateUser() {
  const { control, handleSubmit, reset } = useForm<UFormInputs>({
    defaultValues: {
      fullName: '',
      email: '',
      role: 'user',
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
    <CreateNewForm
      inputs={userInputs}
      entity='user'
      onSubmit={handleSubmit(onSubmit)}
    ></CreateNewForm>
  );
}

export default CreateUser;
