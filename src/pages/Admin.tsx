import Login from '../components/UI/Login';
import Button from '../components/UI/Button';

function Admin() {
  const adminActions = (
    <Button to='/admin-signup' btntype='textOnly'>
      Register Here!
    </Button>
  );
  return (
    <>
      <div className='py-3'>
        <h2 className='text-xl font-bold text-center py-2'>Sai Ram 🙏</h2>
        <p className='text-xs'>
          Please enter your credentials below to move forward.
        </p>
      </div>

      <Login actions={adminActions} />
    </>
  );
}

export default Admin;
