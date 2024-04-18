import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

function CreateNew() {
  const navigate = useNavigate();

  const handleCreateUser = () => {
    navigate('user');
  };

  const handleCreateAdmin = () => {
    navigate('admin');
  };

  return (
    <>
      <div>
        <h2 className='text-xl font-bold text-center py-2'>
          Sai Ram, Admin 🙏
        </h2>
        <p className='text-xs text-center py-2'>
          What would you like to do today?
        </p>
        <hr />
      </div>
      <div className='flex gap-4 my-3 mx-1'>
        <Button btntype='primary' onClick={handleCreateUser}>
          Create New User
        </Button>
        <Button btntype='primary' onClick={handleCreateAdmin}>
          Create New Admin
        </Button>
      </div>
      <hr />
      <Outlet />
    </>
  );
}

export default CreateNew;
