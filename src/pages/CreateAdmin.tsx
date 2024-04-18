import Input from '../components/UI/Input';
import CreateNewForm from '../components/admin/CreateNewForm';

function CreateAdmin() {
  const userInputs = (
    <>
      <Input type='text' label='Full Name' id='full-name' required />
      <Input type='email' label='E-mail' id='email' required />
    </>
  );
  return <CreateNewForm inputs={userInputs} entity='admin'></CreateNewForm>;
}

export default CreateAdmin;
