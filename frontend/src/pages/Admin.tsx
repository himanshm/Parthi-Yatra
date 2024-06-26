import Login from '../components/UI/Login';

function Admin() {
  return (
    <>
      <div className='py-3'>
        <h2 className='text-xl font-bold text-center py-2'>Sai Ram 🙏</h2>
        <p className='text-xs'>
          Please enter your credentials below to move forward.
        </p>
      </div>

      <Login />
    </>
  );
}

export default Admin;
