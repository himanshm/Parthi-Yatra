import CreateNewForm from '../components/admin/CreateNewForm';
import Input from '../components/UI/Input';

function CreateUser() {
  const userInputs = (
    <>
      <Input type='text' label='Full Name' id='full-name' required />
      <Input type='email' label='E-mail' id='email' required />
      <Input type='text' label='Mobile No.' id='phone' required />
      <Input type='text' label='District' id='district' required />
    </>
  );
  return <CreateNewForm inputs={userInputs} entity='user'></CreateNewForm>;
}

export default CreateUser;
